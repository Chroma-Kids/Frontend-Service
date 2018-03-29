import { FETCH_TEACHERS, FETCH_TEACHER_FULFILLED } from '../actions/ActionTypes';

const initialState = {
  currentTeacher: undefined,
};

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_TEACHERS:
      return {
        teachers: payload
      }
    case FETCH_TEACHER_FULFILLED:
      return {
        ...state,
        currentTeacher: payload ? payload : initialState.currentTeacher,
      }
    default:
      return state;
  }
}
