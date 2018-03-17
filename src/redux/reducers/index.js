import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TeacherReducer from './TeacherReducer'
import LoadingReducer from './LoadingReducer'
import SessionReducer from './SessionReducer'

const rootReducer = combineReducers({
  form: formReducer,
  teachers: TeacherReducer,
  session: SessionReducer
});

export default rootReducer;
