import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {

  const { payload } = action;

  switch (action.type) {
    case types.FETCH_SHIFTS_FULFILLED:
      return {
        ...state,
        shifts: action.payload
      };
    default:
      return state;
  }
}
