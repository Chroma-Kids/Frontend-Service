import React from 'react';
import _ from 'lodash';

import TeacherDrag from '../../components/dragdropteacher/Dragteacher'
import ClassroomDrop from '../../components/dragdropteacher/Dropclassroom'

class DashboardTeachersNotAssigned extends React.Component {

  constructor(props) {
    super(props);
    this.state = { enableRecordingTrajectory: false }
  }

  renderTeachersNotAssigned(teachersNotAssigned){
    return _.map(Object.keys(teachersNotAssigned), key => {
      return (
        <TeacherDrag
          text={this.props.teachers[key].name}
          key={key}
          teacherId={key}
          recording={this.state.enableRecordingTrajectory}
        />
      )
    })
  }

  render() {

    const { teachersnotassigned, teachers } = this.props;

    return (
      <div className="row">
        <div className="col-lg-12 m-t">
          <div className="ibox-content">
            <h3>Teachers having a break</h3>
            <ClassroomDrop className="alert alert-info m-n">
              {
                (typeof teachers !== "undefined" &&
                typeof teachersnotassigned !== "undefined" &&
                teachersnotassigned != null ?
                this.renderTeachersNotAssigned(teachersnotassigned)
                :
                <div className="alert alert-warning m-n">No teachers having a break.</div>
              )}
            </ClassroomDrop>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardTeachersNotAssigned;
