import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reset } from 'redux-form';

import Toolbar from '../../components/toolbar/Toolbar'
import Popup from '../../components/popup/Popup'
import { capitalize } from '../../helpers/Helpers'
import List from '../../components/list/List'
import ListItemShiftType from '../../components/list/listitem/ListItemShiftType'
import PropTypes from 'prop-types';

const propTypes = {
  shiftTypes: PropTypes.object.isRequired
};

export default class ShiftTypesList extends Component {

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
    this.props.createShiftType(values);
    this.setState({
      showPopup: !this.state.showPopup
    });
    this.props.dispatch(reset('NewShiftType'))
  }

  render() {

    const { handleSubmit, shiftTypes } = this.props;

    return (
      <div key="shiftTypesView">
        <Popup
          showhide={this.state.showPopup}
          title={"Create a new type of shift"}
          description={"Provide the information about the new type of shift."}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          buttonClose={this.toggleMenu.bind(this)}
          >
            <div className="form-group">
              <Field
              name="label"
              label="label"
              component={this.renderField}
              className="form-control"/>
            </div>
            <div className="form-group">
              <Field
              name="name"
              label="name"
              component={this.renderField}
              className="form-control"/>
            </div>
            <div className="form-group">
              <Field
                name="description"
                label="description"
                component={this.renderField}
                className="form-control"/>
            </div>
        </Popup>

        <div className="col-md-6">
            <List
              title={ "Types of Teachers Shift Types" }
              subtitle={ "When they arrive and leave" }
              hideSearchToolbar={true}
              {...this.props}
              className={ "shiftTypes" }
              buttonToolbarText={"+ New Shift"}
              buttonToolbar={this.toggleMenu.bind(this)}
              list={shiftTypes}
               >
             {_.map(shiftTypes, (shiftType, key) =>
                 <ListItemShiftType {...this.props} key={key} itemKey={key} shiftType={shiftType} editShift={this.toggleMenu.bind(this, shiftType)} />
              )}
            </List>

         </div>
      </div>
    );
  }
}
