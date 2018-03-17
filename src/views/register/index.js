// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Register from './Register';
import { reduxForm } from 'redux-form';
// #endregion

// #region Redux
const mapStateToProps = state => {
  return {

  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ ...viewsActions }, dispatch);
// };
// #endregion

export default connect(mapStateToProps, null)(Register);
