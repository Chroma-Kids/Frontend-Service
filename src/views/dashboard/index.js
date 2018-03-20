// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeachers, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import Dashboard from './Dashboard';
import { reduxForm } from 'redux-form';

// #endregion

const mapStateToProps = (state, ownProps) => {
  return {
    classrooms: state.classrooms,
    teachers: state.teachers
  };
};

export default connect(mapStateToProps, null )(Dashboard);
