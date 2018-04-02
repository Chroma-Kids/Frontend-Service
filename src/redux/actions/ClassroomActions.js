import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: types.FETCH_CLASSROOMS_PENDING,
      payload: true
    });
    database.ref('classrooms/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_CLASSROOMS_FULFILLED,
        payload: snapshot.val()
      });
      dispatch({
        type: types.FETCH_CLASSROOMS_PENDING,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.FETCH_CLASSROOMS_REJECTED,
        payload: -1
      });
    });
  };
}

export function fetchClassroom(uid) {
  return dispatch => {
    dispatch({
      type: types.FETCH_CLASSROOM_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref('classrooms/').child(uid).on('value', function (snapshot) {
                dispatch({
                  type: types.FETCH_CLASSROOM_FULFILLED,
                  payload: snapshot.val()
                });
                dispatch({
                  type: types.FETCH_CLASSROOM_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.FETCH_CLASSROOM_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function createClassroom(classroom) {

  classroom.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_CLASSROOM_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
          dispatch({
            type: types.CREATE_CLASSROOM_FULFILLED,
            payload: database.ref('classrooms/').push({ ...classroom })
          });
          dispatch({
            type: types.CREATE_CLASSROOM_PENDING,
            payload: false
          });
        }
        catch (e) {
            dispatch({
              type: types.CREATE_CLASSROOM_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function updateClassroom(classroom, uid) {

  classroom.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_CLASSROOM_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref(`classrooms/${uid}`).set({...classroom}, function () {
                dispatch({
                  type: types.SAVE_CLASSROOM_FULFILLED,
                  payload: resolve(classroom)
                });
                dispatch({
                  type: types.SAVE_CLASSROOM_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.SAVE_CLASSROOM_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

/*
* To delete a classroom we need to:
* 1) move the teachers of the classroom to break
* 2) delete the classroom itself
**/
export function deleteClassroom(classroomId) {

  return dispatch => {
    dispatch({
      type: types.DELETE_CLASSROOM_PENDING,
      payload: true
    });

    try {
      dispatch({
        type: types.DELETE_CLASSROOM_FULFILLED,
        payload: (() => {
          database.ref(`classrooms/${classroomId}/teachers`).once('value', (snapshot) => {
            const teachers = Object.keys(snapshot.val() || {});
            teachers.forEach((teacherId) => {
              database.ref('classrooms/').child(classroomId).child('teachers').child(teacherId).remove();
              database.ref('teachers-non-assigned/').child(teacherId).set(true);

              database.ref('teachers/').child(teacherId).child('classrooms').child(classroomId).remove();
            });
          }).then(() => {
            database.ref('classrooms/').child(classroomId).remove();
            dispatch({
              type: types.DELETE_CLASSROOM_PENDING,
              payload: false
            });
          });
        })
      });
    }
    catch (e) {
      dispatch({
        type: types.DELETE_CLASSROOM_REJECTED,
        payload: true
      });
    }
  }
}

export function addStudentToClassroom(classroom, student) {

  classroom.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.ADD_STUDENT_CLASSROOM_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
      database.ref(`classrooms/${classroom.id}`).child('students').child(student).set(true, function(e){
        if (e) {
          dispatch({
            type: types.ADD_STUDENT_CLASSROOM_REJECTED,
            payload: reject(e.message)
          });
        }else {
          database.ref(`classrooms/${classroom.id}`).child('num_students').transaction(function (current_value) {
            return (current_value || 0) + 1;
          });

          dispatch({
            type: types.ADD_STUDENT_CLASSROOM_FULFILLED,
            payload: resolve(classroom)
          });
          dispatch({
            type: types.ADD_STUDENT_CLASSROOM_PENDING,
            payload: false
          });
        }
      })
    })
  };
}
