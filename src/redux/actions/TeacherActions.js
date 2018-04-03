import { database } from '../../firebase';
import * as types from './ActionTypes';

export function getTeachers() {
  return dispatch => {
    dispatch({
      type: types.FETCH_TEACHERS_PENDING,
      payload: true
    });
    database.ref('teachers/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_TEACHERS_FULFILLED,
        payload: snapshot.val()
      });
      dispatch({
        type: types.FETCH_TEACHERS_PENDING,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.FETCH_TEACHERS_REJECTED,
        payload: true
      });
    });
  };
}

export function fetchTeacher(uid) {
  return dispatch => {
    dispatch({
      type: types.FETCH_TEACHER_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref('teachers/').child(uid).on('value', function (snapshot) {
                dispatch({
                  type: types.FETCH_TEACHER_FULFILLED,
                  payload: snapshot.val()
                });
                dispatch({
                  type: types.FETCH_TEACHER_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.FETCH_TEACHER_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function createTeacher(teacher) {

  teacher.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_TEACHER_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
          dispatch({
            type: types.CREATE_TEACHER_FULFILLED,
            payload: (() => {
              const ref = database.ref('teachers/').push({ ...teacher });
              database.ref('teachers-non-assigned/').child(ref.key).set(true);
            })()
          });
          dispatch({
            type: types.CREATE_TEACHER_PENDING,
            payload: false
          });
        }
        catch (e) {
            dispatch({
              type: types.CREATE_TEACHER_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function updateTeacher(teacher, uid) {

  teacher.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_TEACHER_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref(`teachers/${uid}`).set({...teacher}, function () {
                dispatch({
                  type: types.SAVE_TEACHER_FULFILLED,
                  payload: resolve(teacher)
                });
                dispatch({
                  type: types.SAVE_TEACHER_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.SAVE_TEACHER_REJECTED,
              payload: reject(e.message)
            });
        }
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
export function deleteTeacher(id) {

  return dispatch => {
    dispatch({
      type: types.DELETE_TEACHER_PENDING,
      payload: true
    });

    try {
      dispatch({
        type: types.DELETE_TEACHER_FULFILLED,
        payload: (() => {
          database.ref('teachers-non-assigned/').child(id).remove();
          database.ref(`teachers/${id}/classrooms`).once('value', (snapshot) => {
            const classrooms = Object.keys(snapshot.val() || {});
            classrooms.forEach((key) => {
              database.ref('classrooms/').child(key).child('teachers').child(id).remove();
            });
          }).then(() => {
            database.ref('teachers/').child(id).remove();
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
export function moveTeacherToClassroom(teacher, from, to) {

  return dispatch => {
    dispatch({
      type: types.MOVE_TEACHER_TO_CLASSROOM_PENDING,
      payload: true
    });

    try {
      dispatch({
        type: types.MOVE_TEACHER_TO_CLASSROOM_FULFILLED,
        payload: (() => {

          if (typeof from !== "undefined" && typeof to !== "undefined") {
            // 1) from a classroom to another classroom
            database.ref('classrooms/').child(from).child('teachers').child(teacher).remove();
            database.ref('classrooms/').child(to).child('teachers').child(teacher).set(true);

            database.ref('classrooms/').child(from).child('num_teachers').transaction(function (current_value) {
              return (current_value || 0) - 1;
            });
            database.ref('classrooms/').child(to).child('num_teachers').transaction(function (current_value) {
              return (current_value || 0) + 1;
            });

            database.ref('teachers/').child(teacher).child('classrooms').child(from).remove();
            database.ref('teachers/').child(teacher).child('classrooms').child(to).set(true);

            // var t1 = new Date(YYYY, MM, DD, 0, 0, 0, 0);
            // var t2 = new Date(ZZZZ, NN, EE, 0, 0, 0, 0);
            // var dif = t1.getTime() - t2.getTime();
            //
            // var Seconds_from_T1_to_T2 = dif / 1000;
            // var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

            const ref = database.ref('trajectories/').push({
              teacher: teacher,
              from: from,
              to: to,
              create_at: new Date().getTime()/1000
            });
            database.ref('teachers/').child(teacher).child('trajectories').child(ref.key).set(true);


            // Comming from a classroom we don't need to do anything about the timming spent teaching
            //
            // console.log(database.ref('teachers/').child(teacher).child('status'))
            //
            // database.ref('teachers/').child(teacher).child('status').set({
            //   type: "classroom",
            //   time: new Date().getTime()/1000
            // });
          }
          else if(typeof to !== "undefined") {
            // 2) from the break-time area to a classroom
            database.ref('teachers-non-assigned/').child(teacher).remove();
            database.ref('classrooms/').child(to).child('teachers').child(teacher).set(true);

            database.ref('classrooms/').child(to).child('num_teachers').transaction(function (current_value) {
              return (current_value || 0) + 1;
            });

            database.ref('teachers/').child(teacher).child('classrooms').child(to).set(true);

            // Comming from break we need to do two things:
            // 1) Start counting again
            // 2) taking into account the previous time

            const ref = database.ref('trajectories/').push({
              teacher: teacher,
              to: to,
              create_at: new Date().getTime()/1000
            });
            database.ref('teachers/').child(teacher).child('trajectories').child(ref.key).set(true);
          }
          else if(typeof from === "undefined" && typeof to === "undefined"){
            // database.ref('teachers/').child(teacher).child('status').set({
            //   where: "break",
            //   time: new Date().getTime()/1000
            // });
          }
          else {
            // 3) from a classroom to the break-time area
            database.ref('classrooms/').child(from).child('teachers').child(teacher).remove();
            database.ref('teachers-non-assigned/').child(teacher).set(true);

            database.ref('classrooms/').child(from).child('num_teachers').transaction(function (current_value) {
              return (current_value || 0) - 1;
            });

            database.ref('teachers/').child(teacher).child('classrooms').child(from).remove();


            //
            const ref = database.ref('trajectories/').push({
              teacher: teacher,
              from: from,
              create_at: new Date().getTime()/1000
            });
            database.ref('teachers/').child(teacher).child('trajectories').child(ref.key).set(true);

          }

          dispatch({
            type: types.MOVE_TEACHER_TO_CLASSROOM_PENDING,
            payload: false
          });
        })
      });
    }
    catch (e) {
      dispatch({
        type: types.MOVE_TEACHER_TO_CLASSROOM_REJECTED,
        payload: true
      });
    }
  }
}

// export function addTrajectory(teacher, classroom ) {
//
//   return {
//     type: types.ADD_TRAJECTORY_TEACHER,
//     payload: (() => {
//
//       // const ref = database.ref('trajectories/').push({
//       //   teacher: teacher,
//       //   classroom: classroom,
//       //   create_at: new Date().getTime()/1000
//       // });
//       // database.ref('teachers/').child(teacher).child('trajectories').child(ref.key).set(true);
//       // database.ref('teachers/').child(teacher).child('status').set({
//       //   classroom: classroom,
//       //   time: new Date().getTime()/1000
//       // });
//     })(),
//   };
// }
