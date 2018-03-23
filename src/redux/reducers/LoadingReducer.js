import { CLASSROOM_STATUS } from '../actions/ClassroomActions';
import { TEACHER_STATUS } from '../actions/TeacherActions';
import { USER_STATUS } from '../actions/UserActions';

export default function (state = {}, action) {
  switch (action.type) {
    case CLASSROOM_STATUS:
      return { ...state, classrooms: action.payload };
    case TEACHER_STATUS:
      return { ...state, teachers: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
