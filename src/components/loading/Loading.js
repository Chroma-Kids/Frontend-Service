import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/actions/UserActions';
import { getTeachers } from '../../redux/actions/TeacherActions';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, teachersLoading } = this.props;
    if(userLoading === undefined) {
      this.props.getUser();
    }

    if(teachersLoading === undefined) {
      // this.props.getTeachers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.teachersLoading === -1 && nextProps.user !== null) {
      // this.props.getTeachers();
    }
  }

  render() {
    const { userLoading, teachersLoading, children } = this.props;
    if((!userLoading && !teachersLoading) || (this.props.user === null)) {
      return (
        <div>
          {children}
        </div>
      )
    }
    else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    // teachersLoading: state.loading.teachers,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getTeachers })(LoadingComponent))
