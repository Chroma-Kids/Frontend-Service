import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getTeachersNotAssigned() {
  return dispatch => {
    dispatch({
      type: types.TEACHER_NOT_ASSIGNED_STATUS,
      payload: true
    });
    database.ref('teachers-non-assigned/').on('value', snapshot => {
      console.log(snapshot.val())
      dispatch({
        type: types.FETCH_TEACHERS_NOT_ASSIGNED,
        payload: snapshot.val()
      });
      dispatch({
        type: types.TEACHER_NOT_ASSIGNED_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.TEACHER_NOT_ASSIGNED_STATUS,
        payload: -1
      });
    });
  };
}
