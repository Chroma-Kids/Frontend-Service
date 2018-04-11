import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchShift, updateShift, deleteShift } from '../../actions/ShiftActions';
import ShiftForm from '../../../views/shifts/ShiftForm';

export class ShiftEditContainer extends Component {
    onSubmit(student) {
        this.props.updateShift(student, this.props.studentId);
    }

    onDelete() {
        this.props.deleteShift(this.props.studentId);
    }

    componentDidMount() {
        this.props.fetchShift(this.props.studentId);
    }

    render() {
        return (
            <div>
                <ShiftForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.shifts.currentShift,
        student: state.shifts.currentShift,
        studentId: ownProps.match.params.studentId,
        formType: 'edit',
        keyAwait: "updateShift"
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return bindActionCreators({updateShift, fetchShift, deleteShift}, dispatch);

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
    form: 'EditShift',
    fields,
    validate,
    enableReinitialize: true
})(ShiftEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorForm);
