import * as types from '../actions/ActionTypes';

const initialState = {
  user: undefined,
};

// TODO: rename to Authentication
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case types.GOOGLE_LOGIN_FULFILLED:
      return {
        ...state,
        user: payload ? payload.user : initialState.user,
      };
    case types.LOGOUT_FULFILLED:
      return { ...state, user: initialState.user };
    case types.GET_USER:
      return {
        ...state,
        user: payload ? payload : initialState.user,
      };
    default:
      return state;
  }
}
