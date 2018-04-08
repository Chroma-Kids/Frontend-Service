import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getClassrooms, createClassroom, deleteClassroom, removeClassroomsListener } from '../../actions/ClassroomActions';
import ClassroomsList from '../../../views/classrooms/ClassroomsList';

export class ClassroomsListContainer extends Component {

    componentDidMount(){
      this.props.getClassrooms();
    }

    componentWillUnmount(){
      this.props.removeClassroomsListener();
    }

    render() {
      return (
        <div>
            <ClassroomsList {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        classrooms: state.classrooms.classrooms,
        loading: state.classrooms.loading
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ getClassrooms, createClassroom, deleteClassroom, removeClassroomsListener }, dispatch);
}

let newClassroomForm = reduxForm({
    form: 'NewClassroom'
})(ClassroomsListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newClassroomForm);
