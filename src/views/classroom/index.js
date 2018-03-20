// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
// import {  } from '../../redux/actions/ClassroomActions';
import Classroom from './Classroom';
import { reduxForm } from 'redux-form';
// #endregion

// #region Redux
const mapStateToProps = (state, ownProps) => {
  return {
    classroom: state.classrooms[ownProps.match.params.classroomId],
    classrooms: state.classrooms,
    teachers: state.teachers
  };
};

export default connect(mapStateToProps, null )(Classroom);
