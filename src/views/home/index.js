// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeachers, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import Home from './Home';
import { reduxForm } from 'redux-form';

// #endregion

export default Home;
