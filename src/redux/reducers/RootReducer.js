import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TeacherReducer from './TeacherReducer'
import StudentReducer from './StudentReducer'
import TrajectoryReducer from './TrajectoryReducer'
import TeacherNotAssignedReducer from './TeacherNotAssignedReducer'
import ClassroomReducer from './ClassroomReducer'
import LoadingReducer from './LoadingReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
  form: formReducer,
  classrooms: ClassroomReducer,
  students: StudentReducer,
  teachers: TeacherReducer,
  trajectories: TrajectoryReducer,
  teachersNotAssigned: TeacherNotAssignedReducer,
  user: UserReducer,
  loading: LoadingReducer
});

export default rootReducer;
