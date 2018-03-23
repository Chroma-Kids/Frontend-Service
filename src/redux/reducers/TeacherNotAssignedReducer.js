import { FETCH_TEACHERS_NOT_ASSIGNED } from '../actions/TeacherNotAssignedActions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TEACHERS_NOT_ASSIGNED:
      return action.payload;
    default:
      return state;
  }
}
