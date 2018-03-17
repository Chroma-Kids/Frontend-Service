import { TEACHER_STATUS } from '../actions/TeacherActions';
import { USER_STATUS } from '../actions/UserActions';

export default function (state = {}, action) {
  switch (action.type) {
    case TEACHER_STATUS:
      return { ...state, posts: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
