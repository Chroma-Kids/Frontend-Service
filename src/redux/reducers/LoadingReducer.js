import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.CLASSROOM_STATUS:
      return { ...state, classrooms: action.payload };
    case types.TEACHER_STATUS:
      return { ...state, teachers: action.payload };
    case types.USER_STATUS:
      return { ...state, user: action.payload };
    case types.GOOGLE_LOGIN_PENDING:
      return { ...state, user: true };
    case types.GOOGLE_LOGIN_FULFILLED:
      return { ...state, user: false };
    default:
      return state;
  }
}
