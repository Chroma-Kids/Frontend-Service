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
      this.props.getTeachers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.teachersLoading === -1 && nextProps.user !== null) {
      this.props.getTeachers();
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
        <div className="align-self-center">
          <i className="fa fa-refresh fa-spin fa-3x fa-fw loading"/>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    teachersLoading: state.loading.posts,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getTeachers })(LoadingComponent))
