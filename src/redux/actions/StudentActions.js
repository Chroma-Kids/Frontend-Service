import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getStudents() {
  return dispatch => {
    dispatch({
      type: types.FETCH_STUDENTS_PENDING,
      payload: true
    });
    database.ref('students/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_STUDENTS_FULFILLED,
        payload: snapshot.val()
      });
      dispatch({
        type: types.FETCH_STUDENTS_PENDING,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.FETCH_STUDENTS_REJECTED,
        payload: true
      });
    });
  };
}


export function fetchStudent(uid) {
  return dispatch => {
    dispatch({
      type: types.FETCH_STUDENT_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref('students/').child(uid).on('value', function (snapshot) {
                dispatch({
                  type: types.FETCH_STUDENT_FULFILLED,
                  payload: snapshot.val()
                });
                dispatch({
                  type: types.FETCH_STUDENT_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.FETCH_STUDENT_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function createStudent(student) {

  student.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_STUDENT_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
          dispatch({
            type: types.CREATE_STUDENT_FULFILLED,
            payload: database.ref('students/').push({ ...student })
          });
          dispatch({
            type: types.CREATE_STUDENT_PENDING,
            payload: false
          });
        }
        catch (e) {
            dispatch({
              type: types.CREATE_STUDENT_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

export function deleteStudent(uid) {

  return dispatch => {
    dispatch({
      type: types.DELETE_STUDENT_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref('students/').child(uid).remove();
            dispatch({
              type: types.DELETE_STUDENT_FULFILLED,
              payload: true
            });
            dispatch({
              type: types.DELETE_STUDENT_PENDING,
              payload: false
            });
        }
        catch (e) {
            dispatch({
              type: types.DELETE_STUDENT_REJECTED,
              payload: true
            });
        }
    })
  };
}

export function updateStudent(student, uid) {

  student.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_STUDENT_PENDING,
      payload: true
    });
    new Promise((resolve, reject) => {
        try {
            database.ref(`students/${uid}`).set({...student}, function () {
                dispatch({
                  type: types.SAVE_STUDENT_FULFILLED,
                  payload: resolve(student)
                });
                dispatch({
                  type: types.SAVE_STUDENT_PENDING,
                  payload: false
                });
            });
        }
        catch (e) {
            dispatch({
              type: types.SAVE_STUDENT_REJECTED,
              payload: reject(e.message)
            });
        }
    })
  };
}

// export function resetCurrentStudent(){
//     return (dispatch) => {
//         dispatch({
//             type: types.STUDENT_RESET
//         })
//     }
// }
