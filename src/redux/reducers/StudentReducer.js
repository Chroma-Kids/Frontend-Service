import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {

  const { payload } = action;

  switch (action.type) {
    case types.FETCH_STUDENTS_FULFILLED:
          console.log(state)
      return {
        // ...state,
        students: action.payload,
        // currentStudent: {}
      };
    case types.FETCH_STUDENT_FULFILLED:
      console.log(payload)
      return {
        ...state,
        currentStudent: payload,
      };
    default:
      return state;
  }
}
