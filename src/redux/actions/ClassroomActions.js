import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: types.CLASSROOM_STATUS,
      payload: true
    });
    database.ref('classrooms/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_CLASSROOMS,
        payload: snapshot.val()
      });
      dispatch({
        type: types.CLASSROOM_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.CLASSROOM_STATUS,
        payload: -1
      });
    });
  };
}

export function createClassroom(classroom) {
  return {
    type: types.CREATE_CLASSROOM,
    payload: database.ref('classrooms/').push({ ...classroom }),
  };
}

export function saveClassroom(classroom, uid) {
  return {
    type: types.SAVE_CLASSROOM,
    payload: database.ref('classrooms/').push({ ...classroom, uid }),
  };
}

export function deleteClassroom(id) {
  return {
    type: types.DELETE_CLASSROOM,
    payload: database.ref('classrooms/').child(id).remove(),
  };
}
