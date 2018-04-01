import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { getTeachers } from '../../actions/TeacherActions';
import { getStudents } from '../../actions/StudentActions';
import { fetchClassroom } from '../../actions/ClassroomActions';
import ClassroomView from '../../../views/classrooms/ClassroomView';

export class ClassroomViewContainer extends Component {

    componentDidMount(){
      this.props.fetchClassroom(this.props.classroom_id);
      this.props.getTeachers();
      this.props.getStudents();
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
        classroom_id: ownProps.match.params.id,
        teachers: state.teachers.teachers,
        students: state.students.students
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchClassroom, getTeachers, getStudents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomViewContainer);
