import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/actions/UserActions';
import { getTeachers } from '../../redux/actions/TeacherActions';
import { getClassrooms } from '../../redux/actions/ClassroomActions';

class LoadingComponent extends Component {

  componentDidMount() {
    // TODO extract to a component in charge of authentification that wraps the rest
    this.props.getUser();
  }

  render() {
    const { userLoading, teachersLoading, classroomsLoading, children } = this.props;
    if ((!userLoading && !teachersLoading && !classroomsLoading) || (this.props.user === null)) {
      return (
        <div>
          {children}
        </div>
      )
    }
    else {
      return (
        <div className="spiner-example">
          <div className="sk-spinner sk-spinner-double-bounce">
            <div className="sk-double-bounce1"/>
            <div className="sk-double-bounce2"/>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    teachersLoading: state.loading.teachers,
    classroomsLoading: state.loading.classroom,
    user: state.user.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser,
      getTeachers,
      getClassrooms,
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadingComponent))
