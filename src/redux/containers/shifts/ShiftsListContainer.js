import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getShiftTypes, removeShiftTypesListener, fetchTeacherShiftsOnThisDay, getShifts, createShift, deleteShift, removeShiftsListener } from '../../actions/ShiftActions';
import { getTeachers, removeTeachersListener } from '../../actions/TeacherActions';
import ShiftsList from '../../../views/shifts/ShiftsList';

export class ShiftsListContainer extends Component {

    onSubmit(shift) {
      this.props.createShift(shift);
    }

    hasTeacherShiftsOnThisDay(teacher, date) {
      this.props.fetchTeacherShiftsOnThisDay(teacher, date);
    }

    componentDidMount(){
      this.props.getShiftTypes();
      this.props.getShifts();
      this.props.getTeachers();
    }

    componentWillUnmount(){
      this.props.removeShiftTypesListener();
      this.props.removeShiftsListener();
      this.props.removeTeachersListener();
    }

    render() {
      return (
        <div>
            <ShiftsList {...this.props} onSubmit={this.onSubmit.bind(this)} hasTeacherShiftsOnThisDay={this.hasTeacherShiftsOnThisDay.bind(this)} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        shifts: state.shifts.shifts,
        shiftTypes: state.shifts.shiftTypes,
        teachers: state.teachers.teachers
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({
      getShiftTypes, removeShiftTypesListener,
      getTeachers, removeTeachersListener,
      getShifts, createShift, deleteShift, fetchTeacherShiftsOnThisDay,
      removeShiftsListener }, dispatch);
}

let newShiftForm = reduxForm({
    form: 'NewShift'
})(ShiftsListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newShiftForm);
