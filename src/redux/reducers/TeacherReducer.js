import { FETCH_TEACHERS } from '../actions/ActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TEACHERS:
      return action.payload;
    default:
      return state;
  }
}
