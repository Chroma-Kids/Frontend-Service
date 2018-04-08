import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchStudent, updateStudent, deleteStudent } from '../../actions/StudentActions';
import StudentForm from '../../../views/students/StudentForm';

export class StudentEditContainer extends Component {
    onSubmit(student) {
        this.props.updateStudent(student, this.props.studentId);
    }

    onDelete() {
        this.props.deleteStudent(this.props.studentId);
    }

    componentDidMount() {
        this.props.fetchStudent(this.props.studentId);
    }

    render() {
        return (
            <div>
                <StudentForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.students.currentStudent,
        student: state.students.currentStudent,
        studentId: ownProps.match.params.studentId,
        formType: 'edit',
        keyAwait: "updateStudent"
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return bindActionCreators({updateStudent, fetchStudent, deleteStudent}, dispatch);

}

const validate = (values) => {
    let errors = {};
    fields.forEach((field) => {
        if (!values[field]) {
            errors[field] = `${field} is required`;
        }
    });
    return errors;
}

const fields = ['name', 'surname'];

let editorForm = reduxForm({
    form: 'EditStudent',
    fields,
    validate,
    enableReinitialize: true
})(StudentEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorForm);
