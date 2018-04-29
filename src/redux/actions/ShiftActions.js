import { database } from '../../firebase'
import * as types from './ActionTypes';
import * as moment from 'moment';

export const removeShiftsListener = () => {
  return dispatch => {
    dispatch({
      type: types.SHIFTS_CLEANED,
      payload: database().child('/shifts/').off()
    });
  }
}

export const getShifts = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFTS_PENDING
    });
    database().child('/shifts/').on('value', snapshot => {
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

export const fetchTeacherShiftsOnThisDay = (teacher, date) => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFT_PENDING
    });

    database().child('/teachers/').child(teacher).child('/shifts').child(date).once('value', function (snapshot, error) {
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


  let _teachers = database().child('/teachers/');
  shift.created_at = new Date().getTime()/1000;

  return dispatch => {
    dispatch({
      type: types.CREATE_SHIFT_PENDING
    });

    const ref = database().child('/shifts/').push({ ...shift }, function(error) {
      if (error){
        dispatch({
          type: types.CREATE_SHIFT_REJECTED,
          payload: error
        });
      }
      else{
        dispatch({
          type: types.CREATE_SHIFT_FULFILLED
        });
      }

    });

    // let da = moment(shift.timestamp, "MM-DD-YYYY");

    shift.shift = ref.key;

    _teachers.child(shift.teacher).child('shifts').child(shift.timestamp).set({...shift});


  };
}

export const deleteShift = (uid) => {
  return dispatch => {
    dispatch({
      type: types.DELETE_SHIFT_PENDING
    });
    database().child('/shifts/').child(uid).remove()
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

    database().child(`/shifts/${uid}`).set({...shift}, function (error) {
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
      payload: database().child('/shifttypes/').off()
    });
  }
}

export const getShiftTypes = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SHIFTTYPES_PENDING
    });
    database().child('/shifttypes/').on('value', snapshot => {
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

    database().child('/shifttypes/').child(uid).once('value', function (snapshot, error) {
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

    database().child('/shifttypes/').push({ ...shift }, function(error) {
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

/*
* Whenever we delete we must be sure that the shiftypes used are also removed:
* 1) select all the shifts that use this shiftType
* 2) iterate and first delete the shifts under teachers
* 3) and also the shifts from the list of shifts themselve
* 4) remove the shiftType from the list.
**/
export const deleteShiftType = (shiftTypeId) => {
  return dispatch => {
    dispatch({
      type: types.DELETE_SHIFTTYPE_PENDING
    });

    database().child('/shifts/').orderByChild("shiftType").equalTo(shiftTypeId).once('value', (val) => {

      const shifts_entries = Object.entries(val.val()|| {});

      shifts_entries.forEach((shiftArray) => {
        let shift = shiftArray[1];
        let shiftKey = shiftArray[0];
        database().child(`/teachers/${shift.teacher}/shifts/${shift.timestamp}`).remove();
        database().child('/shifts/').child(shiftKey).remove();
      });

    }).then(() => {
      database().child('/shifttypes/').child(shiftTypeId).remove();
      dispatch({
        type: types.DELETE_SHIFTTYPE_FULFILLED,
        payload: false
      });
    }).catch(function(error) {
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

    database().child(`/shifttypes/${uid}`).set({...shift}, function (error) {
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
