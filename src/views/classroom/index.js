// #region imports
import React, { Component } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reset } from 'redux-form';
// #region imports
import { connect } from 'react-redux';

import compose from 'recompose/compose';
import { getClassrooms, createClassroom } from '../../redux/actions/ClassroomActions';
import { getUser } from '../../redux/actions/UserActions';
import { reduxForm } from 'redux-form';
import InputField from '../../components/inputfield/InputField'
import Toolbar from '../../components/toolbar/Toolbar'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'

class Classroom extends Component {

  constructor() {
    super();

    this.state = { showPopup: false }
  }

  renderClassrooms(){
    return _.map(this.props.teachers, (teacher, key) => {
      return (
        <tr key={key}>
            <td className="project-status">
                <span className="label label-primary">Active</span>
            </td>
            <td className="project-title">
                <Link to={`/teacher/${key}`}>{teacher.name} {teacher.surname}</Link>
                <br />
                <small>Created 11.08.2014</small>
            </td>
            <td className="project-completion">
                <small>Completion with: 28%</small>
                <div className="progress progress-mini">
                    <div  className="progress-bar"></div>
                </div>
            </td>
            <td className="project-people">
                <a href=""><img alt="image" className="img-circle" src="img/a7.jpg"/></a>
                <a href=""><img alt="image" className="img-circle" src="img/a6.jpg"/></a>
                <a href=""><img alt="image" className="img-circle" src="img/a3.jpg"/></a>
            </td>
            <td className="project-actions">
                <button onClick={() => {
                  this.props.deleteTeacher(key)
                }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete </button>
            </td>
        </tr>
      );
    });
  }

  toggleMenu(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  renderField(field){
    return (
      <div>
        <label htmlFor={field.id} className="col-sm-3 col-form-label">{capitalize(field.label)}</label>
        <input className="form-control" type="text" placeholder={`Enter a ${field.label}...`} {...field.input} />
      </div>
    )
  }

  onSubmit(values){
    this.props.createClassroom(values).then(this.props.dispatch(reset('NewClassroom')));
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div key="homeView">
        <Popup
          showhide={this.state.showPopup}
          title={"Create a new classroom"}
          description={"Provide the information about the new classroom."}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          buttonClose={this.toggleMenu.bind(this)}
          >
            <div className="form-group">
              <Field
              name="name"
              label="name"
              component={this.renderField}
              className="form-control"/>
            </div>
            <div className="form-group">
              <Field
                name="surname"
                label="surname"
                component={this.renderField}
                className="form-control"/>
            </div>
        </Popup>

        <Toolbar title={"Classroom"} button={this.toggleMenu.bind(this)} buttonText={"New classroom"} />

        <div className="ibox">
          <div className="ibox-content">
            <div className="row m-b-sm m-t-sm">
                <div className="col-md-1">
                    <button type="button" id="loading-example-btn" className="btn btn-white btn-sm"><i className="fa fa-refresh"></i> Refresh</button>
                </div>
                <div className="col-md-11">
                    <div className="input-group"><input type="text" placeholder="Search" className="input-sm form-control"/> <span className="input-group-btn">
                        <button type="button" className="btn btn-sm btn-primary"> Go!</button> </span></div>
                </div>
            </div>

            <div className="project-list">
              <table className="table table-hover">
                <tbody>
                  { this.renderClassrooms() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewClassroom'
})(Classroom);

form = connect((state, ownProps) => ({
    classrooms: state.classrooms,
    user: state.user
  }), { getUser, getClassrooms }
)(form);

export default form;
