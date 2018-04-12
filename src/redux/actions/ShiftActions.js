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

// ShiftTypes

export const removeShiftTypesListener = () => {
  return dispatch => {
    dispatch({
      type: types.SHIFTTYPES_CLEANED,
      payload: database.ref('/shifttypes/').off()
    });
  }
}

export const getShiftTypes = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFTTYPES_PENDING
    });
    database.ref('/shifttypes/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_SHIFTTYPES_FULFILLED,
        payload: snapshot.val()
      });
    }, () => {
      dispatch({
        type: types.FETCH_SHIFTTYPES_REJECTED
      });
    });
  };
}

export const fetchShiftType = (uid) => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFTTYPE_PENDING
    });

    database.ref('/shifttypes/').child(uid).once('value', function (snapshot, error) {
      if (error)
        dispatch({
          type: types.FETCH_SHIFTTYPE_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.FETCH_SHIFTTYPE_FULFILLED,
          payload: snapshot.val()
        });
    });
  };
}

export const createShiftType = (shift) => {

  shift.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_SHIFTTYPE_PENDING
    });

    database.ref('/shifttypes/').push({ ...shift }, function(error) {
      if (error)
        dispatch({
          type: types.CREATE_SHIFTTYPE_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.CREATE_SHIFTTYPE_FULFILLED
        });
    })
  };
}

export const deleteShiftType = (uid) => {
  return dispatch => {
    dispatch({
      type: types.DELETE_SHIFTTYPE_PENDING
    });
    database.ref('/shifttypes/').child(uid).remove()
      .then(function() {
        dispatch({
          type: types.DELETE_SHIFTTYPE_FULFILLED
        });
      })
      .catch(function(error) {
        dispatch({
          type: types.DELETE_SHIFTTYPE_REJECTED,
          payload: error
        });
      });
  };
}

export const updateShiftType = (shift, uid) => {

  shift.updated_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.SAVE_SHIFTTYPE_PENDING
    });

    database.ref(`/shifttypes/${uid}`).set({...shift}, function (error) {
      if (error)
        dispatch({
          type: types.SAVE_SHIFTTYPE_REJECTED,
          payload: error
        });
      else
        dispatch({
          type: types.SAVE_SHIFTTYPE_FULFILLED,
          payload: shift
        });

    });
  };
}
