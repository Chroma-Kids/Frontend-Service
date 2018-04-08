import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTeacher } from '../../actions/TeacherActions';
import { getClassrooms } from '../../actions/ClassroomActions';
import { getTrajectories } from '../../actions/TrajectoryActions';
import TeacherView from '../../../views/teachers/TeacherView';

export class TeacherViewContainer extends Component {

    componentDidMount(){
      this.props.fetchTeacher(this.props.teacher_id);
      this.props.getTrajectories();
      this.props.getClassrooms();
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
        teacher_id: ownProps.match.params.id,
        trajectories: state.trajectories.trajectories,
        classrooms: state.classrooms.classrooms
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchTeacher, getTrajectories, getClassrooms }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherViewContainer);
