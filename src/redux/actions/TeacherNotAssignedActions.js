import { database } from '../../firebase'
import * as types from './ActionTypes';

export const removeTeachersNotAssignedListener = () => {
  return dispatch => {
    dispatch({
      type: types.TEACHERS_NOT_ASSIGNED_CLEANED,
      payload: database().child('/teachers-non-assigned/').off()
    });
  }
}

export const getTeachersNotAssigned = () => {
  return dispatch => {
    dispatch({
      type: types.TEACHER_NOT_ASSIGNED_PENDING
    });
    database().child('/teachers-non-assigned/').on('value', snapshot => {
      dispatch({
        type: types.TEACHER_NOT_ASSIGNED_FULFILLED,
        payload: snapshot.val()
      });
    }, () => {
      dispatch({
        type: types.TEACHER_NOT_ASSIGNED_REJECTED
      });
    });
  };
}
