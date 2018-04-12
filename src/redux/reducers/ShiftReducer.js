import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {

  const { payload } = action;

  switch (action.type) {
    case types.FETCH_SHIFTS_FULFILLED:
      return {
        ...state,
        shifts: action.payload
      };
    case types.FETCH_SHIFTTYPES_FULFILLED:
      return {
        ...state,
        shiftTypes: action.payload
      };
    default:
      return state;
  }
}
