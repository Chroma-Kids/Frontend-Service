import { database } from '../../firebase'

export const FETCH_CLASSROOM = 'fetch_classrooms';
export const CLASSROOM_STATUS = 'classroom_status';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: CLASSROOM_STATUS,
      payload: true
    });
    database.on('value', snapshot => {
      dispatch({
        type: FETCH_CLASSROOM,
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
  return dispatch => database.push({ ...classroom });
}

export function saveClassroom(classroom, uid) {
  return dispatch => database.push({ ...classroom, uid });
}

export function deleteClassroom(id) {
  return dispatch => database.child(id).remove();
}
