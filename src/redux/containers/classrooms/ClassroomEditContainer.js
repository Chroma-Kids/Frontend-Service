import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { fetchClassroom, updateClassroom, deleteClassroom } from '../../actions/ClassroomActions';
import ClassroomForm from '../../../views/classrooms/ClassroomForm';

export class ClassroomEditContainer extends Component {
    onSubmit(classroom) {
        this.props.updateClassroom(classroom, this.props.classroom_id);
    }

    onDelete() {
        this.props.deleteClassroom(this.props.classroom_id);
    }

    componentDidMount() {
        this.props.fetchClassroom(this.props.classroom_id);
    }

    render() {
        return (
            <div>
                <ClassroomForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        initialValues: state.classrooms.currentClassroom,
        classroom: state.classrooms.currentClassroom,
        classroom_id: ownProps.match.params.id,
        formType: 'edit',
        keyAwait: "updateClassroom"
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({updateClassroom, fetchClassroom, deleteClassroom}, dispatch);

}

const validate = (values) => {
    let errors = {};
    fields.map((field) => {
        if (!values[field]) {
            errors[field] = `${field} is required`;
        }
    });
    return errors;
}

const fields = ['name', 'surname'];

let editorForm = reduxForm({
    form: 'EditClassroom',
    fields,
    validate
})(ClassroomEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorForm);
