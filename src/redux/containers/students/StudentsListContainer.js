import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { getStudents, createStudent, deleteStudent } from '../../actions/StudentActions';
import StudentsList from '../../../views/students/StudentsList';

export class StudentsListContainer extends Component {

    componentDidMount(){
      this.props.getStudents();
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
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ getStudents, createStudent, deleteStudent }, dispatch);
}

let newStudentForm = reduxForm({
    form: 'NewStudent'
})(StudentsListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newStudentForm);
