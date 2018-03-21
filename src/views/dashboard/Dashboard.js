// #region imports
import React, { Component } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Field, reset } from 'redux-form';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';

import compose from 'recompose/compose';
import { getTeachers, createTeacher, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import { reduxForm } from 'redux-form';
import Toolbar from '../../components/toolbar/Toolbar'
import TeacherDrag from '../../components/dragdropteacher/Dragteacher'
import ClassroomDrop from '../../components/dragdropteacher/Dropclassroom'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'
import { getTeachersNotAssigned } from '../../redux/actions/TeacherNotAssignedActions';
// #region imports

class Dashboard extends Component {

  componentDidMount(){
    this.props.getTeachersNotAssigned();
  }

  renderTeachersNotAssigned(teachersNotAssigned){
    return _.map(Object.keys(teachersNotAssigned), key => {
      return (
        <TeacherDrag
          text={this.props.teachers[key].name}
          key={key}
          teacherid={key}
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
        />
      )
    })
  }

  renderClassrooms(){
    return _.map(this.props.classrooms, (classroom, key) => {
      return (
        <div className="col-lg-3 p-r-none" key={key}>
          <div className="ibox">
              <div className="ibox-content">
                  <h3>{ classroom.name }</h3>
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

    const { handleSubmit } = this.props;

    console.log(this.props)

    return (
      <div key="homeView">

        <Toolbar
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
          {this.renderClassrooms()}
        </div>
      </div>
    );
  }
  // #endregion
}

let form = reduxForm({
  form: 'NewTeacher'
})(Dashboard);

form = connect((state, ownProps) => ({
    teachers: state.teachers,
    user: state.user
  }), { getTeachersNotAssigned }
)(form);

export default DragDropContext(HTML5Backend)(form);
