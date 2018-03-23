import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.CLASSROOM_STATUS:
      return { ...state, classrooms: action.payload };
    case types.TEACHER_STATUS:
      return { ...state, teachers: action.payload };
    case types.USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
