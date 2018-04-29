import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchShiftType, updateShiftType, deleteShiftType } from '../../actions/ShiftActions';
import ShiftTypeForm from '../../../views/shifttypes/ShiftTypeForm';

export class ShiftTypeEditContainer extends Component {
    onSubmit(student) {
        this.props.updateShiftType(student, this.props.studentId);
    }

    onDelete() {
        this.props.deleteShiftType(this.props.studentId);
    }

    componentDidMount() {
        this.props.fetchShiftType(this.props.studentId);
    }

    render() {
        return (
            <div>
                <ShiftTypeForm {...this.props} onSubmit={this.onSubmit.bind(this)} onDelete={this.onDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.shifts.currentShiftType,
        student: state.shifts.currentShiftType,
        studentId: ownProps.match.params.studentId,
        formType: 'edit',
        keyAwait: "updateShiftType"
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return bindActionCreators({updateShiftType, fetchShiftType, deleteShiftType}, dispatch);

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

let editorShiftTypeForm = reduxForm({
    form: 'EditShiftType',
    fields,
    validate,
    enableReinitialize: true
})(ShiftTypeEditContainer);

export default connect(mapStateToProps, mapDispatchToProps)(editorShiftTypeForm);
