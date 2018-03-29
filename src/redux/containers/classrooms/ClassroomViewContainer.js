import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { fetchClassroom } from '../../actions/ClassroomActions';
import ClassroomView from '../../../views/classrooms/ClassroomView';

export class ClassroomViewContainer extends Component {

    componentDidMount(){
      this.props.fetchClassroom(this.props.classroom_id);
    }

    render() {
      return (
        <div>
            <ClassroomView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        classroom: state.classrooms.currentClassroom,
        classroom_id: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchClassroom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomViewContainer);
