import * as types from '../actions/ActionTypes';

const initialState = {
  currentStudent: undefined,
};

export default function (state = {}, action) {

  const { payload } = action;

  switch (action.type) {
    case types.FETCH_STUDENTS:
      return {
        students: action.payload
      };
    case types.FETCH_STUDENT_FULFILLED:
      return {
        ...state,
        currentStudent: payload ? payload : initialState.currentStudent,
      };
    case types.SAVE_STUDENT_FULFILLED:
      return {
        ...state,
        currentStudent: payload ? payload : initialState.currentStudent,
      };
    default:
      return state;
  }
}
