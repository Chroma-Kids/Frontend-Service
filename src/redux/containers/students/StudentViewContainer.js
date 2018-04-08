import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchStudent } from '../../actions/StudentActions';
import StudentView from '../../../views/students/StudentView';

export class StudentViewContainer extends Component {

    componentDidMount(){
      this.props.fetchStudent(this.props.studentId);
    }

    render() {
      return (
        <div>
            <StudentView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        student: state.students.currentStudent,
        studentId: ownProps.match.params.studentId
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchStudent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentViewContainer);
