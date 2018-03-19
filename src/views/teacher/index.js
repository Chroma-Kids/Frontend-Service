// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import {  } from '../../redux/actions/TeacherActions';
import Teacher from './Teacher';
import { reduxForm } from 'redux-form';
// #endregion

// #region Redux
const mapStateToProps = (state, ownProps) => {
  return {
    teacher: state.teachers[ownProps.match.params.teacherId],
    teachers: state.teachers
  };
};

export default connect(mapStateToProps, null )(Teacher);
