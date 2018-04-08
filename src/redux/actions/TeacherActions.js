import { database } from '../../firebase';
import * as types from './ActionTypes';

export const removeTeachersListener = () => {
  return dispatch => {
    dispatch({
      type: types.TEACHERS_CLEANED,
      payload: database.ref('/teachers/').off()
    });
  }
}

export const getTeachers = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_TEACHERS_PENDING
    });
    database.ref('/teachers/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_TEACHERS_FULFILLED,
        payload: snapshot.val()
      });
    }, () => {
      dispatch({
        type: types.FETCH_TEACHERS_REJECTED,
        payload: true
      });
    });
  };
}

export const fetchTeacher = (uid) => {
  return dispatch => {
    dispatch({
      type: types.FETCH_TEACHER_PENDING
    });

    database.ref('/teachers/').child(uid).once('value', function (snapshot, error) {
      if (error)
        dispatch({
          type: types.FETCH_TEACHER_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.FETCH_TEACHER_FULFILLED,
          payload: snapshot.val()
        });
    });
  };
}

export const createTeacher = (teacher) => {

  teacher.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_TEACHER_PENDING
    });

    const ref = database.ref('/teachers/').push({ ...teacher }, function(error) {
      if (error)
        dispatch({
          type: types.CREATE_TEACHER_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.CREATE_TEACHER_FULFILLED
        });
    });
    database.ref('/teachers-non-assigned/').child(ref.key).set(true);
  };
}

export const updateTeacher = (teacher, uid) => {

  teacher.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_TEACHER_PENDING
    });

    database.ref(`/teachers/${uid}`).set({...teacher}, function (error) {
      if (error)
        dispatch({
          type: types.SAVE_TEACHER_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.SAVE_TEACHER_FULFILLED,
          payload: teacher
        });
    })
  };
}

/*
* Whenever we delete we must be sure that the teacher is removed from:
* 1) the list of teachers-non-assigned
* 2) the list of teachers in a classroom. For that we look at the classrooms that the
*    teacher is in and the we iterate over them removing the teacher from it
* 3) the list of teachers itself. But only when the other deletes are done.
**/
export const deleteTeacher = (id) => {

  return dispatch => {
    dispatch({
      type: types.DELETE_TEACHER_PENDING,
      payload: true
    });

    try {
      dispatch({
        type: types.DELETE_TEACHER_FULFILLED,
        payload: (() => {
          database.ref('/teachers-non-assigned/').child(id).remove();
          database.ref(`/teachers/${id}/classrooms`).once('value', (snapshot) => {
            const classrooms = Object.keys(snapshot.val() || {});
            classrooms.forEach((key) => {
              database.ref('/classrooms/').child(key).child('teachers').child(id).remove();
            });
          }).then(() => {
            database.ref('/teachers/').child(id).remove();
            dispatch({
              type: types.DELETE_TEACHER_PENDING,
              payload: false
            });
          });
        })
      });
    }
    catch (e) {
      dispatch({
        type: types.DELETE_TEACHER_REJECTED,
        payload: true
      });
    }
  }
}

/*
* There are three alternatives to move a teacher within the nursery
* 1) From a classroom to another classroom: there is a from-classroom and also a to-classroom.
*    Remove teacher from from-classroom and add it to to-classroom.
*
* 2) From break-time area to a classroom: there is a to-classroom.
*    Remove teacher from break-time area and add it to to-classroom.
*
* 3) From clasroom to break-time area: there is a from-classroom.
*    Remove teacher from from-classroom and add it to break-time area.
**/
export const moveTeacherToClassroom = (teacher, from, to) => {

  return dispatch => {
    dispatch({
      type: types.MOVE_TEACHER_TO_CLASSROOM_PENDING
    });

    let _classrooms = database.ref('/classrooms/');
    let _teachers = database.ref('/teachers/');
    let _teachers_not_assigned = database.ref('/teachers-non-assigned/');

    if (typeof from !== "undefined" && typeof to !== "undefined") {
      // 1) from a classroom to another classroom
      _classrooms.child(from).child('teachers').child(teacher).remove();
      _classrooms.child(to).child('teachers').child(teacher).set(true);

      _classrooms.child(from).child('num_teachers').transaction(function (current_value) {
        return (current_value || 0) - 1;
      });

      _classrooms.child(to).child('num_teachers').transaction(function (current_value) {
        return (current_value || 0) + 1;
      });

      _teachers.child(teacher).child('classrooms').child(from).remove();
      _teachers.child(teacher).child('classrooms').child(to).set(true);

      // var t1 = new Date(YYYY, MM, DD, 0, 0, 0, 0);
      // var t2 = new Date(ZZZZ, NN, EE, 0, 0, 0, 0);
      // var dif = t1.getTime() - t2.getTime();
      //
      // var Seconds_from_T1_to_T2 = dif / 1000;
      // var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

      const ref = database.ref('/trajectories/').push({
        teacher: teacher,
        from: from,
        to: to,
        create_at: new Date().getTime()/1000
      });

      _teachers.child(teacher).child('trajectories').child(ref.key).set(true);

      dispatch({
        type: types.MOVE_FROM_CLASSROOM_TO_CLASSROOM_FULFILLED
      });

      // Comming from a classroom we don't need to do anything about the timming spent teaching
      //
      // database.ref('teachers/').child(teacher).child('status').set({
      //   type: "classroom",
      //   time: new Date().getTime()/1000
      // });
    }
    else if(typeof to !== "undefined") {
      // 2) from the break-time area to a classroom
      _teachers_not_assigned.child(teacher).remove();
      _classrooms.child(to).child('teachers').child(teacher).set(true);

      _classrooms.child(to).child('num_teachers').transaction(function (current_value) {
        return (current_value || 0) + 1;
      });

      _teachers.child(teacher).child('classrooms').child(to).set(true);

      // Comming from break we need to do two things:
      // 1) Start counting again
      // 2) taking into account the previous time

      const ref = database.ref('/trajectories/').push({
        teacher: teacher,
        to: to,
        create_at: new Date().getTime()/1000
      });

      _teachers.child(teacher).child('trajectories').child(ref.key).set(true);

      dispatch({
        type: types.MOVE_FROM_BREAK_TO_CLASSROOM_FULFILLED
      });
    }
    else if(typeof from === "undefined" && typeof to === "undefined"){
      // database.ref('teachers/').child(teacher).child('status').set({
      //   where: "break",
      //   time: new Date().getTime()/1000
      // });

      dispatch({
        type: types.MOVE_TEACHER_TO_CLASSROOM_REJECTED
      });
    }
    else {
      // 3) from a classroom to the break-time area
      _classrooms.child(from).child('teachers').child(teacher).remove();
      _teachers_not_assigned.child(teacher).set(true);

      _classrooms.child(from).child('num_teachers').transaction(function (current_value) {
        return (current_value || 0) - 1;
      });

      _teachers.child(teacher).child('classrooms').child(from).remove();

      const ref = database.ref('/trajectories/').push({
        teacher: teacher,
        from: from,
        create_at: new Date().getTime()/1000
      });
      _teachers.child(teacher).child('trajectories').child(ref.key).set(true);

      dispatch({
        type: types.MOVE_FROM_CLASSROOM_TO_BREAK_FULFILLED
      });

    }
  }
}
