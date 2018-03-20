// #region imports
import React, { Component } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Field, reset } from 'redux-form';
// #region imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import compose from 'recompose/compose';
import { getTeachers, createTeacher, saveTeacher, deleteTeacher } from '../../redux/actions/TeacherActions';
import { getUser } from '../../redux/actions/UserActions';
import { reduxForm } from 'redux-form';
import Toolbar from '../../components/toolbar/Toolbar'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'

class Dashboard extends Component {


  // console.log(Object.keys(teachersKey))


  renderTeachersClassroom(teachersKey){

    console.log(teachersKey)

    return _.map(Object.keys(teachersKey), key => {
      return (
        <li key={key} className="warning-element" >
            {this.props.teachers[key].name}
            <div className="agile-detail">
                <a href="#" className="pull-right btn btn-xs btn-white">First break</a>
                <i className="fa fa-clock-o"></i> 12.10.2015
            </div>
        </li>
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

                  <div className="input-group">
                      <input type="text" placeholder="Add new teacher " className="input input-sm form-control"/>
                      <span className="input-group-btn">
                              <button type="button" className="btn btn-sm btn-white"> <i className="fa fa-plus"></i> Add teacher</button>
                      </span>
                  </div>

                  <ul className="sortable-list connectList agile-list ui-sortable" id="todo">
                  {(typeof classroom.teachers !== "undefined" ?
                    this.renderTeachersClassroom(classroom.teachers)
                    :
                    <div className="alert alert-warning">
                        No teachers assigned to this classroom.
                    </div>
                  )}
                      {  }
                  </ul>
              </div>
          </div>
      </div>)
    });

  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div key="homeView">

        <Toolbar
            title={"Dashboard"} />

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
  }), { saveTeacher, createTeacher, getTeachers, deleteTeacher, getUser }
)(form);

export default form;
