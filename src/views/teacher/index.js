// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { getTeacher } from '../../redux/actions/TeacherActions';
import Teacher from './Teacher';
import { reduxForm } from 'redux-form';
// #endregion

// #region Redux
const mapStateToProps = state => {
  return {
    teacher: state.teacher
  };
};

export default connect(mapStateToProps, { getTeacher })(Teacher);
