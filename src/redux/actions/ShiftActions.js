import { database } from '../../firebase'
import * as types from './ActionTypes';

export const removeShiftsListener = () => {
  return dispatch => {
    dispatch({
      type: types.SHIFTS_CLEANED,
      payload: database.ref('/shifts/').off()
    });
  }
}

export const getShifts = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFTS_PENDING
    });
    database.ref('/shifts/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_SHIFTS_FULFILLED,
        payload: snapshot.val()
      });
    }, () => {
      dispatch({
        type: types.FETCH_SHIFTS_REJECTED
      });
    });
  };
}

export const fetchShift = (uid) => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFT_PENDING
    });

    database.ref('/shifts/').child(uid).once('value', function (snapshot, error) {
      if (error)
        dispatch({
          type: types.FETCH_SHIFT_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.FETCH_SHIFT_FULFILLED,
          payload: snapshot.val()
        });
    });
  };
}

export const createShift = (shift) => {

  shift.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_SHIFT_PENDING
    });

    database.ref('/shifts/').push({ ...shift }, function(error) {
      if (error)
        dispatch({
          type: types.CREATE_SHIFT_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.CREATE_SHIFT_FULFILLED
        });
    })
  };
}

export const deleteShift = (uid) => {
  return dispatch => {
    dispatch({
      type: types.DELETE_SHIFT_PENDING
    });
    database.ref('/shifts/').child(uid).remove()
      .then(function() {
        dispatch({
          type: types.DELETE_SHIFT_FULFILLED
        });
      })
      .catch(function(error) {
        dispatch({
          type: types.DELETE_SHIFT_REJECTED,
          payload: error
        });
      });
  };
}

export const updateShift = (shift, uid) => {

  shift.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_SHIFT_PENDING
    });

    database.ref(`/shifts/${uid}`).set({...shift}, function (error) {
      if (error)
        dispatch({
          type: types.SAVE_SHIFT_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.SAVE_SHIFT_FULFILLED,
          payload: shift
        });

    });
  };
}
