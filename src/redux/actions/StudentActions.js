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

export function createStudent(student, uid) {
  return {
    type: types.CREATE_STUDENT,
    payload: database.ref('students/').push({ ...student })
  };
}

export function saveStudent(student, uid) {
  return {
    type: types.SAVE_STUDENT,
    payload: database.ref('students/').push({...student, uid})
  }
}

export function deleteStudent(id) {
  return {
    type: types.DELETE_STUDENT,
    payload: database.ref('students/').child(id).remove()
  };
}
