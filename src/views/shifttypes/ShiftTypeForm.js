import React, { Component } from 'react';
import { Field } from 'redux-form';
import Toolbar from '../../components/toolbar/Toolbar'
import { Link } from 'react-router-dom';

export default class ShiftTypeForm extends Component {
    onSubmit(values) {
        this.props.onSubmit(values);
    }

    render() {
        const { formType, handleSubmit, submitting } = this.props;

        return (
          <div key="editTeacherView">
            <Toolbar
              breadcrumb={['Dashboard', 'Teachers']}
              title={this.props.formType === 'edit' ? 'Edit Teacher' : 'New Teacher'} />

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
                        {formType === 'edit' ?
                                <button disabled={submitting} className="btn btn-primary" type="submit">Save changes</button>
                             :
                            <button className="btn btn-primary" type="submit">Create Teacher</button>
                        }
                        <Link to={`/teachers`} className="btn btn-white m"><i className="fa fa-cross"></i> Back to list </Link>

                  </form>
                </div>
              </div>
            </section>
          </div>
        )
    }
}
