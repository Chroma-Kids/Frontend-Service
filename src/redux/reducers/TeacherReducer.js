import { FETCH_TEACHERS, FETCH_TEACHER } from '../actions/TeacherActions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TEACHERS:
      return action.payload;
    default:
      return state;
  }
}
