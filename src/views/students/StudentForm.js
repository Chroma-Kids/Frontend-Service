import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { Redirect } from 'react-router';
import { updateStudent, fetchStudent } from '../../redux/actions/StudentActions';
import Toolbar from '../../components/toolbar/Toolbar'
import InputField from '../../components/inputfield/InputField'
import { Link } from 'react-router-dom';

export default class StudentForm extends Component {
    onSubmit(values) {
        this.props.onSubmit(values);
    }

    render() {
        const { fields: { name, surname }, formType, handleSubmit, submitting } = this.props;

        return (
          <div key="editStudentView">
            <Toolbar
              breadcrumb={['Dashboard', 'Students']}
              title={this.props.formType == 'edit' ? 'Edit Student' : 'New Student'} />

            <section className="teachers">
              <div className="ibox col-lg-12">
                <div className="ibox-content">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-12">
                        <Field
                          className="form-control"
                          name="name"
                          id="name"
                          component="input"
                          type="text"
                          placeholder={`Please enter Name`}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Surname</label>
                      <div className="col-sm-12">
                        <Field
                          className="form-control"
                          name="surname"
                          id="surname"
                          component="input"
                          type="text"
                          placeholder={`Please enter Surname`}
                        />
                      </div>
                    </div>
                        {formType == 'edit' ?
                                <button disabled={submitting} className="btn btn-primary" type="submit">Save changes</button>
                             :
                            <button className="btn btn-primary" type="submit">Create Student</button>
                        }
                        <Link to={`/students`} className="btn btn-white m"><i className="fa fa-cross"></i> Back to list </Link>

                  </form>
                </div>
              </div>
            </section>
          </div>
        )
    }
}
