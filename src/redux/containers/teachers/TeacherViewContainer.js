import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTeacher } from '../../actions/TeacherActions';
import { getClassrooms, removeClassroomsListener } from '../../actions/ClassroomActions';
import { getTrajectories, removeTrajectoriesListener } from '../../actions/TrajectoryActions';
import TeacherView from '../../../views/teachers/TeacherView';

export class TeacherViewContainer extends Component {

    componentDidMount(){
      this.props.fetchTeacher(this.props.teacherId);
      // OPTIMIZE:  we don't need to load them all
      this.props.getTrajectories();
      this.props.getClassrooms();
      // this.props.getTeacherTrajectories(this.props.teacher_id);
    }

    componentWillUnmount(){
      this.props.removeClassroomsListener();
      this.props.removeTrajectoriesListener();
    }

    render() {
      return (
        <div>
            <TeacherView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        teacher: state.teachers.currentTeacher,
        teacherId: ownProps.match.params.teacherId,
        // OPTIMIZE:  we don't need to load them all
        trajectories: state.trajectories.trajectories,
        classrooms: state.classrooms.classrooms,
        teacherTrajectories: state.teachers.teacherTrajectories
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchTeacher, getClassrooms, getTrajectories,
                removeTrajectoriesListener, removeClassroomsListener }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherViewContainer);
