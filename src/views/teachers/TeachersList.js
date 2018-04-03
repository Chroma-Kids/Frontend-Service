import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reset } from 'redux-form';

import Toolbar from '../../components/toolbar/Toolbar'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'
import List from '../../components/list/List'
import ListItemTeacher from '../../components/list/listitem/ListItemTeacher'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { showPopup: false }
  }

  renderField(field){
    return (
      <div>
        <label htmlFor={field.id} className="col-sm-3 col-form-label">{capitalize(field.label)}</label>
        <input className="form-control" type="text" placeholder={`Enter a ${field.label}...`} {...field.input} />
      </div>
    )
  }

  toggleMenu(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onSubmit(values){
    this.props.createTeacher(values);
    this.setState({
      showPopup: !this.state.showPopup
    });
    this.props.dispatch(reset('NewTeacher'))
  }

  render() {

    const { handleSubmit, teachers } = this.props;

    return (
      <div key="homeView">
        <Popup
          showhide={this.state.showPopup}
          title={"Create a new teacher"}
          description={"Provide the information about the new teacher."}
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
            title={"Teachers"}
            breadcrumb={['Dashboard']}
            button={this.toggleMenu.bind(this)}
            buttonText={"New teacher"} />

          {(!teachers ?
            <div className="spiner-example">
                <div className="sk-spinner sk-spinner-double-bounce">
                    <div className="sk-double-bounce1"></div>
                    <div className="sk-double-bounce2"></div>
                </div>
            </div>
            :
            <List {...this.props} className={ "teachers" } >
             {_.map(teachers, (teacher, key) =>
                 <ListItemTeacher {...this.props} key={key} itemKey={key} teacher={teacher} />
              )}
            </List>
         )}
      </div>
    );
  }
}
