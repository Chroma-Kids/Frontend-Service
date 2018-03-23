import { database } from '../../firebase'

export const FETCH_CLASSROOMS = 'fetch_classrooms';
export const CLASSROOM_STATUS = 'classroom_status';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: CLASSROOM_STATUS,
      payload: true
    });
    database.ref('classrooms/').on('value', snapshot => {
      dispatch({
        type: FETCH_CLASSROOMS,
        payload: snapshot.val()
      });
      dispatch({
        type: CLASSROOM_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: CLASSROOM_STATUS,
        payload: -1
      });
    });
  };
}

export function createClassroom(classroom, uid) {
  return dispatch => database.ref('classrooms/').push({ ...classroom });
}

export function saveClassroom(classroom, uid) {
  return dispatch => database.ref('classrooms/').push({ ...classroom, uid });
}

export function deleteClassroom(id) {
  return dispatch => database.ref('classrooms/').child(id).remove();
}
