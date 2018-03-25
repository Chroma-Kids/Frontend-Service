import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/actions/UserActions';
import { getTeachers } from '../../redux/actions/TeacherActions';
import { getClassrooms } from '../../redux/actions/ClassroomActions';
import { getStudents } from '../../redux/actions/StudentActions';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, teachersLoading, classroomsLoading, studentsLoading } = this.props;
    if(userLoading === undefined) {
      this.props.getUser();
    }

    if(teachersLoading === undefined) {
      this.props.getTeachers();
    }

    if(classroomsLoading === undefined) {
      this.props.getClassrooms();
    }

    if(studentsLoading === undefined) {
      this.props.getStudents();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.teachersLoading === -1 && nextProps.user !== null) {
      this.props.getTeachers();
    }
    if(nextProps.classroomsLoading === -1 && nextProps.user !== null) {
      this.props.getClassrooms();
    }
    if(nextProps.studentsLoading === -1 && nextProps.user !== null) {
      this.props.getStudents();
    }
  }

  render() {
    const { userLoading, teachersLoading, classroomsLoading, studentsLoading, children } = this.props;
    if((!userLoading && !teachersLoading && !classroomsLoading && !studentsLoading) || (this.props.user === null)) {
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
                <div className="sk-double-bounce1"></div>
                <div className="sk-double-bounce2"></div>
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
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getTeachers, getClassrooms, getStudents })(LoadingComponent))
