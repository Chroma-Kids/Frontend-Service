import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { fetchTeacher } from '../../actions/TeacherActions';
import TeacherView from '../../../views/teachers/TeacherView';

export class TeacherViewContainer extends Component {

    componentDidMount(){
      this.props.fetchTeacher(this.props.teacher_id);
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
        teacher_id: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchTeacher }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherViewContainer);
