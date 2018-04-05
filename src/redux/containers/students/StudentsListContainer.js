import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getStudents, createStudent, deleteStudent, removeStudentsListener } from '../../actions/StudentActions';
import { getClassrooms, removeClassroomsListener } from '../../actions/ClassroomActions';
import StudentsList from '../../../views/students/StudentsList';

export class StudentsListContainer extends Component {

    componentDidMount(){
      this.props.getStudents();
      this.props.getClassrooms();
    }

    componentWillUnmount(){
      this.props.removeStudentsListener();
      this.props.removeClassroomsListener();
    }

    render() {
      return (
        <div>
            <StudentsList {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        students: state.students.students,
        classrooms: state.classrooms.classrooms,
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({
      getStudents, createStudent, deleteStudent, getClassrooms, 
      removeStudentsListener, removeClassroomsListener }, dispatch);
}

let newStudentForm = reduxForm({
    form: 'NewStudent'
})(StudentsListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newStudentForm);
