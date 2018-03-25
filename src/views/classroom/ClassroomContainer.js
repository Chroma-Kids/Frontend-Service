import { connect } from 'react-redux';
import Classroom from './Classroom';

const mapStateToProps = (state, ownProps) => {
  return {
    classroom: state.classrooms[ownProps.match.params.classroomId],
    classrooms: state.classrooms,
    teachers: state.teachers
  };
};

export default connect(mapStateToProps)(Classroom);
