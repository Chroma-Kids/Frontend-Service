import { database } from '../../firebase';
import * as types from './ActionTypes';

export const removeTrajectoriesListener = () => {
  return dispatch => {
    dispatch({
      type: types.TEACHERS_CLEANED,
      payload: database().child('/trajectories/').off()
    });
  }
}

export const getTrajectories = () => {
  return dispatch => {
    dispatch({ type: types.FETCH_TRAJECTORIES_PENDING });
    database().child('/trajectories/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_TRAJECTORIES_FULFILLED,
        payload: snapshot.val()
      });
    }, () => {
      dispatch({ type: types.FETCH_TRAJECTORIES_REJECTED });
    });
  };
}
