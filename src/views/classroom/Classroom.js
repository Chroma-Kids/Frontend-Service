// #region imports
import React, { PureComponent } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reset } from 'redux-form';

import Toolbar from '../../components/toolbar/Toolbar'
// #region imports

class Classroom extends PureComponent<Props, State> {

  render() {

    const { classroom } = this.props;

    return (
      (!classroom ?
        <div className="spiner-example">
            <div className="sk-spinner sk-spinner-double-bounce">
                <div className="sk-double-bounce1"></div>
                <div className="sk-double-bounce2"></div>
            </div>
        </div>
        :
        <div key="classroomView">
          <Toolbar title={`${classroom.name}`} />

          <div className="row">
            <div className="col-lg-9">
                <div className="wrapper wrapper-content animated fadeInUp">
                    <div className="ibox">
                        <div className="ibox-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="m-b-md">
                                        <a href="#" className="btn btn-white btn-xs pull-right">Edit project</a>
                                        <h2>Contract with Zender Company</h2>
                                    </div>
                                    <dl className="dl-horizontal">
                                        <dt>Status:</dt> <dd><span className="label label-primary">Active</span></dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <dl className="dl-horizontal">

                                        <dt>Created by:</dt> <dd>Alex Smith</dd>
                                        <dt>Messages:</dt> <dd>  162</dd>
                                        <dt>Client:</dt> <dd><a href="#" className="text-navy"> Zender Company</a> </dd>
                                        <dt>Version:</dt> <dd> 	v1.4.2 </dd>
                                    </dl>
                                </div>
                                <div className="col-lg-7" id="cluster_info">
                                    <dl className="dl-horizontal">

                                        <dt>Last Updated:</dt> <dd>16.08.2014 12:15:57</dd>
                                        <dt>Created:</dt> <dd> 	10.07.2014 23:36:57 </dd>
                                        <dt>Participants:</dt>
                                        <dd className="project-people">
                                        <a href=""><img alt="image" className="img-circle" src="img/a3.jpg"/></a>
                                        <a href=""><img alt="image" className="img-circle" src="img/a1.jpg"/></a>
                                        <a href=""><img alt="image" className="img-circle" src="img/a2.jpg"/></a>
                                        <a href=""><img alt="image" className="img-circle" src="img/a4.jpg"/></a>
                                        <a href=""><img alt="image" className="img-circle" src="img/a5.jpg"/></a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <dl className="dl-horizontal">
                                        <dt>Completed:</dt>
                                        <dd>
                                            <div className="progress progress-striped active m-b-sm">
                                                <div style={{width: '60%'}} className="progress-bar"></div>
                                            </div>
                                            <small>Project completed in <strong>60%</strong>. Remaining close the project, sign a contract and invoice.</small>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row m-t-sm">
                                <div className="col-lg-12">
                                <div className="panel blank-panel">
                                <div className="panel-heading">
                                    <div className="panel-options">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a href="#tab-1" data-toggle="tab">Users messages</a></li>
                                            <li className=""><a href="#tab-2" data-toggle="tab">Last activity</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="panel-body">

                                <div className="tab-content">
                                <div className="tab-pane active" id="tab-1">
                                    <div className="feed-activity-list">
                                        <div className="feed-element">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="img/profile.jpg"/>
                                            </a>
                                            <div className="media-body ">
                                                <small className="pull-right">23h ago</small>
                                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                                                <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="tab-pane" id="tab-2">

                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>Title</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Comments</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <span className="label label-primary"><i className="fa fa-check"></i> Sent</span>
                                            </td>
                                            <td>
                                                Contrary to popular
                                            </td>
                                            <td>
                                                12.07.2014 10:10:1
                                            </td>
                                            <td>
                                                14.07.2014 10:16:36
                                            </td>
                                            <td>
                                                <p className="small">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                                </p>
                                            </td>

                                        </tr>

                                        </tbody>
                                    </table>

                                </div>
                                </div>

                                </div>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="wrapper wrapper-content project-manager">
                    <h4>Project description</h4>
                    <img src="img/zender_logo.png" className="img-responsive"/>
                    <p className="small">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                    </p>
                    <p className="small font-bold">
                        <span><i className="fa fa-circle text-warning"></i> High priority</span>
                    </p>
                    <h5>Project tag</h5>
                    <ul className="tag-list">
                        <li><a href=""><i className="fa fa-tag"></i> Zender</a></li>
                        <li><a href=""><i className="fa fa-tag"></i> Lorem ipsum</a></li>
                        <li><a href=""><i className="fa fa-tag"></i> Passages</a></li>
                        <li><a href=""><i className="fa fa-tag"></i> Variations</a></li>
                    </ul>
                    <h5>Project files</h5>
                    <ul className="list-unstyled project-files">
                        <li><a href=""><i className="fa fa-file"></i> Project_document.docx</a></li>
                        <li><a href=""><i className="fa fa-file-picture-o"></i> Logo_zender_company.jpg</a></li>
                        <li><a href=""><i className="fa fa-stack-exchange"></i> Email_from_Alex.mln</a></li>
                        <li><a href=""><i className="fa fa-file"></i> Contract_20_11_2014.docx</a></li>
                    </ul>
                    <div className="text-center m-t-md">
                        <a href="#" className="btn btn-xs btn-primary">Add files</a>
                        <a href="#" className="btn btn-xs btn-primary">Report contact</a>

                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    );
  }
  // #endregion
}

export default Classroom;
