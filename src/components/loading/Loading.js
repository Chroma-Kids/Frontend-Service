import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoadingComponent extends Component {

  render() {
    const { userLoading, teachersLoading, classroomsLoading, children } = this.props;
    if (!userLoading && !teachersLoading && !classroomsLoading) {
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
    studentsLoading: state.loading.students,
    classroomsLoading: state.loading.classroom,
  };
}

export default withRouter(connect(mapStateToProps)(LoadingComponent))
