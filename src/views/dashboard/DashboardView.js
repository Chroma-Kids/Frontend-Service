// #region imports
import React, { Component } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import HTML5Backend from 'react-dnd-html5-backend';

import { DragDropContext } from 'react-dnd';

import compose from 'recompose/compose';

import ToolbarDashboard from '../../components/toolbar/ToolbarDashboard'
import TeacherDrag from '../../components/dragdropteacher/Dragteacher'
import ClassroomDrop from '../../components/dragdropteacher/Dropclassroom'
import { Link } from 'react-router-dom';

class Dashboard extends Component {

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
          teacherid={key}
          recording={this.state.enableRecordingTrajectory}
        />
      )
    })
  }

  renderTeachersClassroom(teachersKey, classroomKey){
    return _.map(Object.keys(teachersKey), key => {
      return (
        <TeacherDrag
          text={this.props.teachers[key].name}
          key={key}
          teacherid={key}
          classroomid={classroomKey}
          recording={this.state.enableRecordingTrajectory}
        />
      )
    })
  }

  renderClassrooms(){
    return _.map(this.props.classrooms, (classroom, key) => {

      let ratio = 1 / classroom.ratio;
      let ratio_real = classroom.num_teachers / classroom.num_students;
      let ratio_spare = ratio + 0.20;

      return (
        <div className="col-lg-3 p-r-none" key={key}>
          <div className="ibox">
              <div className="ibox-content">
                  <h3>
                  <Link to={`classroom/${key}`}>{ classroom.name }</Link>
                  {(ratio > ratio_real ? <span className="label label-danger m-l">Teacher needed</span> : null)}
                  {(ratio_real > ratio_spare && classroom.num_teachers > 1 ? <span className="label label-primary m-l">Spare teacher</span> : null)}
                  </h3>
                  <p className="small"><i className="fa fa-hand-o-up"></i> Add here a toolbar for the classroom.
                  For instance creating incidents for this classroom direclty.</p>
                  <p className="small"><i className="fa fa-hand-o-up"></i> Drag teachers between classrooms</p>

                  {/*<div className="input-group">
                      <input type="text" placeholder="Add new teacher " className="input input-sm form-control"/>
                      <span className="input-group-btn">
                              <button type="button" className="btn btn-sm btn-white"> <i className="fa fa-plus"></i> Add teacher</button>
                      </span>
                  </div>*/}

                  <ClassroomDrop classroomId={key}>
                    {(typeof classroom.teachers !== "undefined" ?
                      this.renderTeachersClassroom(classroom.teachers, key)
                      :
                      <div className="alert alert-warning">
                          No teachers assigned to this classroom.
                      </div>
                    )}
                  </ClassroomDrop>
              </div>
          </div>
      </div>)
    });

  }

  toggleMenu(){
    this.setState({
      enableRecordingTrajectory: !this.state.enableRecordingTrajectory
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div key="homeView">

        <ToolbarDashboard
          button={this.toggleMenu.bind(this)}
          buttonText={(this.state.enableRecordingTrajectory ? "Recording..." : "Testing")}
          title={"Dashboard"} />

        <div className="row">
          <div className="col-lg-12 m-t">
            <div className="ibox-content">
              <h3>Teachers having a break</h3>
              <ClassroomDrop className="alert alert-info m-n">
                {
                  (typeof this.props.teachersnotassigned !== "undefined" && this.props.teachersnotassigned != null ?
                  this.renderTeachersNotAssigned(this.props.teachersnotassigned)
                  :
                  <div className="alert alert-warning m-n">No teachers having a break.</div>
                )}
              </ClassroomDrop>
            </div>
          </div>
        </div>
        <div className="row">
        {
          (typeof this.props.classrooms !== "undefined" && this.props.classrooms != null ?
          this.renderClassrooms()
          :
          <div className="col-lg-12 m-t">
            <div className="ibox-content">
              <div className="alert alert-warning m">You must create some classrooms first</div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Dashboard);
