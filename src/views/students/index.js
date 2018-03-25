// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getTeachers, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import Students from './Student';
import { reduxForm } from 'redux-form';

// #endregion

export default Students;
