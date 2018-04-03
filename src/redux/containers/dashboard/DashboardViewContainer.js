import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardView from '../../../views/dashboard/DashboardView';
import { getTeachersNotAssigned } from '../../actions/TeacherNotAssignedActions';
import { getTeachers} from '../../actions/TeacherActions';
import { getClassrooms } from '../../actions/ClassroomActions';

export class DashboardViewContainer extends Component {

    componentDidMount(){
      this.props.getTeachersNotAssigned();
      this.props.getTeachers();
      this.props.getClassrooms();
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
      teachersnotassigned: state.teachersNotAssigned
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ getTeachersNotAssigned, getTeachers, getClassrooms }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardViewContainer);
