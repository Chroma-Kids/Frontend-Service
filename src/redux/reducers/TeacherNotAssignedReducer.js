import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {

    const { payload } = action;

    switch (action.type) {
      case types.TEACHER_NOT_ASSIGNED_FULFILLED:
        return payload;
      default:
        return state;
    }
}
