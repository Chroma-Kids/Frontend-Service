import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getShifts, createShift, deleteShift, removeShiftsListener } from '../../actions/ShiftActions';
import { getTeachers, removeTeachersListener } from '../../actions/TeacherActions';
import ShiftsList from '../../../views/shifts/ShiftsList';

export class ShiftsListContainer extends Component {

    componentDidMount(){
      this.props.getShifts();
      this.props.getTeachers();
    }

    componentWillUnmount(){
      this.props.removeShiftsListener();
      this.props.removeTeachersListener();
    }

    render() {
      return (
        <div>
            <ShiftsList {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        shifts: state.shifts.shifts,
        teachers: state.teachers.teachers
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({
      getTeachers, removeTeachersListener,
      getShifts, createShift, deleteShift, getShifts,
      removeShiftsListener }, dispatch);
}

let newShiftForm = reduxForm({
    form: 'NewShift'
})(ShiftsListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newShiftForm);
