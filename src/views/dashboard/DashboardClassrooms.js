import React from 'react';
import _ from 'lodash';

import TeacherDrag from '../../components/dragdropteacher/Dragteacher'
import ClassroomDrop from '../../components/dragdropteacher/Dropclassroom'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../index';

class DashboardClassrooms extends React.Component {

  renderTeachersClassroom(teachersKey, classroomKey){
    return _.map(Object.keys(teachersKey), key => {
      return (
        <TeacherDrag
          teacher={this.props.teachers[key]}
          key={key}
          teacherId={key}
          classroomId={classroomKey}
          recording={this.props.enableRecordingTrajectory}
          {...this.props}
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
          <div className="ibox clear">
              <div className="ibox-content">
                  <h3>
                  <Link to={ROUTES.AUTHENTICATED.CLASSROOM(key)}>{ classroom.name }</Link>
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

  render() {

    return (
      <div className="row">
      {
        (typeof this.props.teachers !== "undefined"
        && typeof this.props.classrooms !== "undefined"
         && this.props.classrooms != null ?
        this.renderClassrooms()
        :
        <div className="col-lg-12 m-t">
          <div className="ibox-content">
            <div className="alert alert-warning m">You must create some classrooms first</div>
          </div>
        </div>
      )}
      </div>
    );
  }
}

export default DashboardClassrooms;
