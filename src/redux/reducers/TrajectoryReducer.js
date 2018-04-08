import * as types from '../actions/ActionTypes';

const initialState = {
  currentTeacher: undefined,
};

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_TRAJECTORIES_FULFILLED:
      return {
        ...state,
        trajectories: payload
      }
    default:
      return state;
  }
}
