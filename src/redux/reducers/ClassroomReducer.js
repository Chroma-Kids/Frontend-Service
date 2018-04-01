import * as types from '../actions/ActionTypes';

const initialState = {
  currentClassroom: undefined,
};

export default function (state = {}, action) {

    const { payload } = action;

    switch (action.type) {
      case types.FETCH_CLASSROOMS_FULFILLED:
        return {
          classrooms: action.payload
        };
      case types.FETCH_CLASSROOM_FULFILLED:
        return {
          ...state,
          currentClassroom: payload ? payload : initialState.currentClassroom,
        };
      case types.SAVE_CLASSROOM_FULFILLED:
        return {
          ...state,
          currentClassroom: payload ? payload : initialState.currentClassroom,
        };
      default:
        return state;
    }
}
