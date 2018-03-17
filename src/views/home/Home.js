// #region imports
import React, { PureComponent } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reset } from 'redux-form';
// #region imports

class Home extends PureComponent<Props, State> {

  componentWillMount(){
    console.log("nextProps");

    // this.props.getTeachers();
    // this.props.getUser();
    // if(this.props.user.loading === false && this.props.user.email === undefined){
    //   this.props.history.replace('/login');
    // }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    // if(nextProps.user.loading === true && nextProps.user.email === undefined){
    //   nextProps.history.replace('/login');
    // }
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
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} />
    )
  }

  onSubmit(values){
    this.props.createTeacher(values).then(this.props.dispatch(reset('NewTeacher')));
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div key="homeView">
        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-sm-4">
                <h2>Chroma Kids Frontend</h2>
                <ol className="breadcrumb">
                    <li>
                      <Link to={'/home'}>
                        <i className="fa fa-info" />
                        Home
                      </Link>
                    </li>
                    <li className="active">
                        <strong>Teachers</strong>
                    </li>
                </ol>
            </div>
            <div className="col-sm-8">
                <div className="title-action">
                <Link className="btn btn-primary " to={'/about'}>
                  <i className="fa fa-info" />
                  go to about
                </Link>
                </div>
            </div>
        </div>
        <section className="teachers">
          <section className="teachersList">
            {this.renderTeachers()}
          </section>
          <section className="teachersForm">
            <h2>Teachers Form </h2>
            <form className="form-horizontal ibox-content" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group">

                    <div className="col-lg-12">
                      <Field
                      name="name"
                      component={this.renderField}
                      className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-12">
                      <Field
                        name="surname"
                        component={this.renderField}
                        className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-12">
                        <button className="btn btn-sm btn-white" type="submit">Create teacher</button>
                    </div>
                </div>
            </form>
          </section>
        </section>
      </div>
    );
  }
  // #endregion
}

export default Home;
