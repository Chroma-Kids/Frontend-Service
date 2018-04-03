import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {

    const { payload } = action;

    switch (action.type) {
      case types.FETCH_TEACHERS_NOT_ASSIGNED:
        return payload;
      default:
        return state;
    }
}
