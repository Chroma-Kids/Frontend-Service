import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchStudent, updateStudent, deleteStudent } from '../../actions/StudentActions';
import StudentForm from '../../../views/students/StudentForm';

export class StudentEditContainer extends Component {
    onSubmit(student) {
        this.props.updateStudent(student, this.props.student_id);
    }

    onDelete() {
        this.props.deleteStudent(this.props.student_id);
    }

    componentDidMount() {
        this.props.fetchStudent(this.props.student_id);
    }

    render() {
        return (
            <div>
                <StudentForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        initialValues: state.students.currentStudent,
        student: state.students.currentStudent,
        student_id: ownProps.match.params.id,
        formType: 'edit',
        keyAwait: "updateStudent"
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({updateStudent, fetchStudent, deleteStudent}, dispatch);

}

const validate = (values) => {
    let errors = {};
    fields.map((field) => {
        if (!values[field]) {
            errors[field] = `${field} is required`;
            return
        }
    });
    return errors;
}

const fields = ['name', 'surname'];

let editorForm = reduxForm({
    form: 'EditStudent',
    fields,
    validate
})(StudentEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorForm);
