import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TeacherReducer from './TeacherReducer'
import ClassroomReducer from './ClassroomReducer'
import LoadingReducer from './LoadingReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
  form: formReducer,
  classrooms: ClassroomReducer,
  teachers: TeacherReducer,
  user: UserReducer,
  loading: LoadingReducer
});

export default rootReducer;
