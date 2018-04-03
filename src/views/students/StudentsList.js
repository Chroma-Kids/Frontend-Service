import React, { Component } from 'react';
import { Field, reset } from 'redux-form';
import _ from 'lodash';

import Toolbar from '../../components/toolbar/Toolbar'
import List from '../../components/list/List'
import ListItemStudent from '../../components/list/listitem/ListItemStudent'
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
    const { handleSubmit, students } = this.props;

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

        {(!students ?
          <div className="spiner-example">
              <div className="sk-spinner sk-spinner-double-bounce">
                  <div className="sk-double-bounce1"></div>
                  <div className="sk-double-bounce2"></div>
              </div>
          </div>
          :
          <List {...this.props} className={ "students" } >
           {_.map(students, (student, key) =>
               <ListItemStudent {...this.props} key={key} itemKey={key} student={student} />
            )}
          </List>
        )}
      </div>
    );
  }
}
