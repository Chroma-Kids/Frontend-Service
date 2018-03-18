// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';
// import compose from 'recompose/compose';
import { getTeachers, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import Home from './Home';
import { reduxForm } from 'redux-form';

// #endregion

// let form = reduxForm({
//   form: 'NewTeacher'
// })(Home);
//
// form = connect((state, ownProps) => ({
//     teachers: state.teachers,
//     user: state.user
//   }), { saveTeacher, getTeachers, deleteTeacher, getUser }
// )(form);
//
export default Home;
