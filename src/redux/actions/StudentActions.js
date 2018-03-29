import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getStudents() {
  return dispatch => {
    dispatch({
      type: types.STUDENT_STATUS,
      payload: true
    });
    database.ref('students/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_STUDENTS,
        payload: snapshot.val()
      });
      dispatch({
        type: types.STUDENT_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.STUDENT_STATUS,
        payload: -1
      });
    });
  };
}


export function updateStudent(student, uid) {
  student.updated_at = new Date().getTime()/1000;

  return {
    type: types.SAVE_STUDENT,
    payload: new Promise((resolve, reject) => {
      try{
        database.ref(`students/${uid}`).set({...student}, function () {
            resolve(student);
        });
      }
      catch(e){
        reject(e.message);
      }
    })
  }
}

export function fetchStudent(uid) {
  return {
    type: types.FETCH_STUDENT,
    payload: new Promise((resolve, reject) => {
          try {
              database.ref('students/').child(uid).on('value', function (snapshot) {
                  resolve(snapshot.val());
              });
          }
          catch (e) {
              reject(e.message);
          }
      })
  };
}

export function createStudent(student, uid) {

  student.created_at = new Date().getTime()/1000;

  return {
    type: types.CREATE_STUDENT,
    payload: database.ref('students/').push({ ...student })
  };
}

export function deleteStudent(id) {
  return {
    type: types.DELETE_STUDENT,
    payload: database.ref('students/').child(id).remove()
  };
}
