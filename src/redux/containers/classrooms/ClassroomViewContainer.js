import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getTeachers, removeTeachersListener } from '../../actions/TeacherActions';
import { getStudents, removeStudentsListener } from '../../actions/StudentActions';
import { fetchClassroom, addStudentToClassroom, deleteStudentFromClassroom, removeClassroomListener } from '../../actions/ClassroomActions';
import ClassroomView from '../../../views/classrooms/ClassroomView';

export class ClassroomViewContainer extends Component {

    componentDidMount(){
      this.props.fetchClassroom(this.props.classroomId);
      this.props.getTeachers();
      this.props.getStudents();
    }

    componentWillUnmount(){
      this.props.removeStudentsListener();
      this.props.removeTeachersListener();
      this.props.removeClassroomListener(this.props.classroomId);
    }

    render() {
      return (
        <div>
            <ClassroomView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        classroom: state.classrooms.currentClassroom,
        classroomId: ownProps.match.params.classroomId,
        teachers: state.teachers.teachers,
        students: state.students.students
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchClassroom, getTeachers, getStudents,
      removeStudentsListener, removeTeachersListener, removeClassroomListener,
      addStudentToClassroom, deleteStudentFromClassroom }, dispatch);
}

let addStudentForm = reduxForm({
    form: 'AddStudent'
})(ClassroomViewContainer);

export default connect(mapStateToProps, mapDispatchToProps)(addStudentForm);
