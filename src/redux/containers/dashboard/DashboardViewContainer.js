import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardView from '../../../views/dashboard/DashboardView';
import { getTeachersNotAssigned, removeTeachersNotAssignedListener } from '../../actions/TeacherNotAssignedActions';
import { getTeachers, removeTeachersListener, checkInTeacher, checkOutTeacher, moveTeacherToClassroom } from '../../actions/TeacherActions';
import { getClassrooms, removeClassroomsListener } from '../../actions/ClassroomActions';
import { getShiftTypes, removeShiftTypesListener, fetchTeacherShiftsOnThisDay } from '../../actions/ShiftActions';

export class DashboardViewContainer extends Component {

    hasTeacherShiftsOnThisDay(teacher, date) {
      this.props.fetchTeacherShiftsOnThisDay(teacher, date);
    }

    componentDidMount(){
      this.props.getTeachersNotAssigned();
      this.props.getTeachers();
      this.props.getClassrooms();
      this.props.getShiftTypes();
    }

    componentWillUnmount(){
      this.props.removeClassroomsListener();
      this.props.removeTeachersListener();
      this.props.removeTeachersNotAssignedListener();
      this.props.removeShiftTypesListener();

    }

    render() {
      return (
        <div>
            <DashboardView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
      classrooms: state.classrooms.classrooms,
      teachers: state.teachers.teachers,
      teachersnotassigned: state.teachersNotAssigned,
      shiftTypes: state.shifts.shiftTypes
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ getTeachersNotAssigned, getTeachers, getClassrooms,
      checkInTeacher, checkOutTeacher, moveTeacherToClassroom,
      getShiftTypes, removeShiftTypesListener, fetchTeacherShiftsOnThisDay,
    removeTeachersListener, removeClassroomsListener, removeTeachersNotAssignedListener }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardViewContainer);
