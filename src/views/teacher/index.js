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
    // currentView: state.views.currentView,
    // userAuth: state.userAuth,

    // teachers
    teacher: state.teacher
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ ...viewsActions }, dispatch);
// };
// #endregion

export default connect(mapStateToProps, { getTeacher })(Teacher);
