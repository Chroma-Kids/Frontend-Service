import { FETCH_STUDENTS, FETCH_STUDENT_FULFILLED, SAVE_STUDENT_FULFILLED } from '../actions/ActionTypes';

const initialState = {
  currentStudent: undefined,
};

export default function (state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        students: action.payload
      };
    case FETCH_STUDENT_FULFILLED:
      return {
        ...state,
        currentStudent: payload ? payload : initialState.currentStudent,
      };
    case SAVE_STUDENT_FULFILLED:
      return {
        ...state,
        currentStudent: payload ? payload : initialState.currentStudent,
      };
    default:
      return state;
  }
}
