import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => {
  return {
    classrooms: state.classrooms,
    teachers: state.teachers,
    teachersnotassigned: state.teachersNotAssigned
  };
};

export default connect(mapStateToProps)(Dashboard);
