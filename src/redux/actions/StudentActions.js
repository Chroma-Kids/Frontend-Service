import { database } from '../../firebase'

export const FETCH_STUDENTS = 'fetch_students';
export const STUDENT_STATUS = 'student_status';

export function getStudents() {
  return dispatch => {
    dispatch({
      type: STUDENT_STATUS,
      payload: true
    });
    database.ref('students/').on('value', snapshot => {
      dispatch({
        type: FETCH_STUDENTS,
        payload: snapshot.val()
      });
      dispatch({
        type: STUDENT_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: STUDENT_STATUS,
        payload: -1
      });
    });
  };
}

export function createStudent(student, uid) {
  return dispatch => {
    var ref = database.ref('students/').push({ ...student });
  };
}

export function saveStudent(student, uid) {
  return dispatch => database.ref('students/').push({ ...student, uid });
}

export function deleteStudent(id) {
  return dispatch => {
    database.ref('students/').child(id).remove();
  };
}
