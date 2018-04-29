import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTeacher } from '../../actions/TeacherActions';
import TeacherView from '../../../views/teachers/TeacherView';

export class TeacherViewContainer extends Component {

    componentDidMount(){
      this.props.fetchTeacher(this.props.teacherId);
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
        teacherId: ownProps.match.params.teacherId
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchTeacher }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherViewContainer);
