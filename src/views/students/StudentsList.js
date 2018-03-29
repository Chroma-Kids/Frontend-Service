// #region imports
import React, { Component } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import { Field, reset } from 'redux-form';
// #region imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import compose from 'recompose/compose';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../../redux/actions/StudentActions';
import { getUser } from '../../redux/actions/UserActions';
import { reduxForm } from 'redux-form';
import Toolbar from '../../components/toolbar/Toolbar'
import List from '../../components/list/List'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'

export default class StudentsList extends Component {

  constructor() {
    super();

    this.state = { showPopup: false }
  }

  onSubmit(values){
    this.props.createStudent(values);
    this.setState({
      showPopup: !this.state.showPopup
    });
    this.props.dispatch(reset('NewStudent'))
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

  render() {
    const { handleSubmit } = this.props;

    return (
      <div key="homeView">
        <Popup
          showhide={this.state.showPopup}
          title={"Create a new student"}
          description={"Provide the information about the new student."}
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

        <Toolbar
            title={"Students"}
            breadcrumb={['Dashboard']}
            button={this.toggleMenu.bind(this)}
            buttonText={"New student"} />

        <List {...this.props}
          className={ "students" }
          elements={ this.props.students }
          />
      </div>
    );
  }
}
