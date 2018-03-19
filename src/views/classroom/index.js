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

class Classroom extends Component {

  constructor() {
    super();

    this.state = { showPopup: false }
  }

  renderClassrooms(){
    return _.map(this.props.classrooms, (teacher, key) => {
      return (
        <div key={key} className="col-lg-4">
          <div className="ibox">
            <div className="ibox-title">
                <span className="label label-primary pull-right">NEW</span>
                <h5>IT-01 - Design Team</h5>
            </div>
            <div className="ibox-content">
              <div className="team-members">
                  <a href="#"><img alt="member" className="img-circle" src="img/a1.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a2.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a3.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a5.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a6.jpg"/></a>
              </div>
              <h4>Info about Design Team</h4>
              <p>
                  It is a long established fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem Ipsum is that it has.
              </p>
              <div>
                  <span>Status of current project:</span>
                  <div className="stat-percent">48%</div>
                  <div className="progress progress-mini">
                      <div className="progress-bar"></div>
                  </div>
              </div>
              <div className="row  m-t-sm">
                  <div className="col-sm-4">
                      <div className="font-bold">PROJECTS</div>
                      12
                  </div>
                  <div className="col-sm-4">
                      <div className="font-bold">RANKING</div>
                      4th
                  </div>
                  <div className="col-sm-4 text-right">
                      <div className="font-bold">BUDGET</div>
                      $200,913 <i className="fa fa-level-up text-navy"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderNewClassroom(){
      return (
        <div className="col-lg-4">
          <div className="ibox">
            <div className="ibox-title">
                <h5 className="new-title"><input id="email"
                  type="text"
                  label="name"
                  placeholder="Enter a name"
                  onChange={(event) => this.setState({
                    name: event.target.value
                  }) } />
                </h5>
            </div>
            <div className="ibox-content">
              <div className="team-members">
                  <a href="#"><img alt="member" className="img-circle" src="img/a1.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a2.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a3.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a5.jpg"/></a>
                  <a href="#"><img alt="member" className="img-circle" src="img/a6.jpg"/></a>
              </div>
              <h4>Info about Design Team</h4>
              <p>
                  It is a long established fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem Ipsum is that it has.
              </p>
              <div>
                  <span>Status of current project:</span>
                  <div className="stat-percent">48%</div>
                  <div className="progress progress-mini">
                      <div className="progress-bar"></div>
                  </div>
              </div>
              <div className="row  m-t-sm">
                  <div className="col-sm-4">
                      <div className="font-bold">PROJECTS</div>
                      12
                  </div>
                  <div className="col-sm-4">
                      <div className="font-bold">RANKING</div>
                      4th
                  </div>
                  <div className="col-sm-4 text-right">
                      <div className="font-bold">BUDGET</div>
                      $200,913 <i className="fa fa-level-up text-navy"></i>
                  </div>
              </div>
              <div className="vertical-timeline-content  m-t-sm">
                <button className="btn btn-primary " onClick={this.toggleMenu.bind(this)}>
                  <i className="fa fa-info" />
                  Add Classroom
                </button>
              </div>
            </div>
          </div>
        </div>
      );

  }


  toggleMenu(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  renderField(field){
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} />
    )
  }

  onSubmit(values){
    this.props.createClassroom(values).then(this.props.dispatch(reset('NewTeacher')));
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div key="homeView">

          <div className={"modal inmodal " + (this.state.showPopup ? 'show' : 'hide') } 
               tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content animated flipInY">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" onClick={this.toggleMenu.bind(this)}><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                          <h4 className="modal-title">Modal title</h4>
                          <small className="font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                      </div>
                      <div className="modal-body">
                          <p><strong>Lorem Ipsum is simply dummy</strong> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.</p>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-white" onClick={this.toggleMenu.bind(this)}>Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>

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
                      <tr>
                          <td className="project-status">
                              <span className="label label-primary">Active</span>
                          </td>
                          <td className="project-title">
                              <a href="project_detail.html">Contract with Zender Company</a>
                              <br />
                              <small>Created 14.08.2014</small>
                          </td>
                          <td className="project-completion">
                                  <small>Completion with: 48%</small>
                                  <div className="progress progress-mini">
                                      <div className="progress-bar"></div>
                                  </div>
                          </td>
                          <td className="project-people">
                              <a href=""><img alt="image" className="img-circle" src="img/a3.jpg"/></a>
                              <a href=""><img alt="image" className="img-circle" src="img/a1.jpg"/></a>
                              <a href=""><img alt="image" className="img-circle" src="img/a2.jpg"/></a>
                              <a href=""><img alt="image" className="img-circle" src="img/a4.jpg"/></a>
                              <a href=""><img alt="image" className="img-circle" src="img/a5.jpg"/></a>
                          </td>
                          <td className="project-actions">
                              <a href="#" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                          </td>
                      </tr>
                      <tr>
                          <td className="project-status">
                              <span className="label label-primary">Active</span>
                          </td>
                          <td className="project-title">
                              <a href="project_detail.html">There are many variations of passages</a>
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
                              <a href="#" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </a>
                              <a href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                          </td>
                      </tr>
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
