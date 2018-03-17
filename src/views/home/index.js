// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';
import compose from 'recompose/compose';
import { getTeachers, createTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import Home from './Home';
import { reduxForm } from 'redux-form';
import authorization from '../../components/authorization/Authorization';

// #endregion

// #region Redux
const mapStateToProps = (state) => ({
  teachers: state.teachers
});

const mapDispatchToProps = (dispatch) => ({
});


// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ ...viewsActions }, dispatch);
// };
// #endregion

let form = reduxForm({
  form: 'NewTeacher'
})(Home);

// const authCondition = (authUser) => !!authUser;

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(form);

// export default connect(mapStateToProps, { getTeachers, createTeacher, deleteTeacher, getUser })(form);
