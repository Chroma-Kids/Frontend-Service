import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchTeacher, updateTeacher, deleteTeacher } from '../../actions/TeacherActions';
import TeacherForm from '../../../views/teachers/TeacherForm';

export class TeacherEditContainer extends Component {
    onSubmit(teacher) {
        this.props.updateTeacher(teacher, this.props.teacherId);
    }

    onDelete() {
        this.props.deleteTeacher(this.props.teacherId);
    }

    componentDidMount() {
        this.props.fetchTeacher(this.props.teacherId);
    }

    render() {
        return (
            <div>
                <TeacherForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        initialValues: state.teachers.currentTeacher,
        teacher: state.teachers.currentTeacher,
        teacherId: ownProps.match.params.teacherId,
        formType: 'edit',
        keyAwait: "updateTeacher"
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({updateTeacher, fetchTeacher, deleteTeacher}, dispatch);

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
    form: 'EditTeacher',
    fields,
    validate,
    enableReinitialize: true
})(TeacherEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorForm);
