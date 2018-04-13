import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { updateShift, deleteShift } from '../../actions/ShiftActions';
import ShiftForm from '../../../views/shifts/ShiftForm';

export class ShiftEditContainer extends Component {
    onSubmit(student) {
        this.props.updateShift(student, this.props.studentId);
    }

    onDelete() {
        this.props.deleteShift(this.props.studentId);
    }

    componentDidMount() {
        // this.props.fetchShift(this.props.studentId);
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
        form: 'edit',
        keyAwait: "updateShift"
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return bindActionCreators({updateShift, deleteShift}, dispatch);

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

let editorShiftForm = reduxForm({
    form: 'EditShift',
    fields,
    validate,
    enableReinitialize: true
})(ShiftEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorShiftForm);
