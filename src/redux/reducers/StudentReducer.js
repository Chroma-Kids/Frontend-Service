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
      console.log(payload)
      return {
        ...state,
        currentStudent: payload,
      };
    default:
      return state;
  }
}
