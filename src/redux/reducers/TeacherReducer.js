import * as types from '../actions/ActionTypes';

const initialState = {
  currentTeacher: undefined,
};

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_TEACHERS_FULFILLED:
      return {
        ...state,
        teachers: payload
      }
    case types.FETCH_TEACHER_FULFILLED:
      return {
        ...state,
        currentTeacher: payload ? payload : initialState.currentTeacher,
      }
    default:
      return state;
  }
}
