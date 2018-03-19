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

function jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

class Home extends Component {

  constructor() {
    super();

    this.state = { showPopup: false }
  }

  renderTeachers(){
    return _.map(this.props.teachers, (teacher, key) => {
      return (
        <div key={key} className="col-lg-4">
            <div className="contact-box center-version">
              <Link to={`/teacher/${key}`}>
                <img alt="image" className="img-circle" src="img/a2.jpg"/>

                <h3 className="m-b-xs"><strong>{teacher.name} {teacher.surname}</strong></h3>

                <div className="font-bold">Graphics designer</div>
                <address className="m-t-md">
                    <strong>Twitter, Inc.</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </Link>
                <div className="contact-box-footer">
                    <div className="m-t-xs btn-group">
                        <button onClick={() => {
                          this.props.deleteTeacher(key)
                        }} className="btn btn-xs btn-white"><i className="fa fa-cross"></i> Delete </button>
                    </div>
                </div>

            </div>
        </div>
      );
    });
  }

  renderField(field){
    return (
      <div>
        <label htmlFor={field.id} className="col-sm-3 col-form-label">{jsUcfirst(field.label)}</label>
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
    this.props.createTeacher(values).then(this.props.dispatch(reset('NewTeacher')));
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {

    const { handleSubmit } = this.props;

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
            button={this.toggleMenu.bind(this)}
            buttonText={"New teacher"} />

        <section className="teachers">
          <section className="teachersList">
            {this.renderTeachers()}
          </section>
        </section>
      </div>
    );
  }
  // #endregion
}

let form = reduxForm({
  form: 'NewTeacher'
})(Home);

form = connect((state, ownProps) => ({
    teachers: state.teachers,
    user: state.user
  }), { saveTeacher, createTeacher, getTeachers, deleteTeacher, getUser }
)(form);

export default form;
