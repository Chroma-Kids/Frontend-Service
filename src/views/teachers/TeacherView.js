// #region imports
import React, { PureComponent } from 'react';

import Toolbar from '../../components/toolbar/Toolbar'

class Teacher extends PureComponent<Props, State> {

  render() {

    const { teacher } = this.props;

    return (
      (!teacher ?
        <div className="spiner-example">
            <div className="sk-spinner sk-spinner-double-bounce">
                <div className="sk-double-bounce1"></div>
                <div className="sk-double-bounce2"></div>
            </div>
        </div>
        :
        <div key="teacherView">
          <Toolbar
            title={`${teacher.name+" "+teacher.surname}`}
            breadcrumb={['Dashboard', 'Teachers']} />

          <div className="wrapper wrapper-content animated fadeInRight">


              <div className="row m-b-lg m-t-lg">
                  <div className="col-md-6">

                      <div className="profile-image">
                          <img src={teacher.photoURL} className="img-circle circle-border m-b-md" alt="profile" />
                      </div>
                      <div className="profile-info">
                          <div className="">
                              <div>
                                  <h2 className="no-margins">
                                      {teacher.name} {teacher.surname}
                                  </h2>
                                  <h4>Founder of Groupeq</h4>
                                  <small>
                                      There are many variations of passages of Lorem Ipsum available, but the majority
                                      have suffered alteration in some form Ipsum available.
                                  </small>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <table className="table small m-b-xs">
                          <tbody>
                          <tr>
                              <td>
                                  <strong>142</strong> Projects
                              </td>
                              <td>
                                  <strong>22</strong> Followers
                              </td>

                          </tr>
                          <tr>
                              <td>
                                  <strong>61</strong> Comments
                              </td>
                              <td>
                                  <strong>54</strong> Articles
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <strong>154</strong> Tags
                              </td>
                              <td>
                                  <strong>32</strong> Friends
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="col-md-3">
                      <small>Sales in last 24h</small>
                      <h2 className="no-margins">206 480</h2>
                  </div>


              </div>
              <div className="row">

                  <div className="col-lg-3">

                      <div className="ibox">
                          <div className="ibox-content">
                                  <h3>About Alex Smith</h3>

                              <p className="small">
                                  There are many variations of passages of Lorem Ipsum available, but the majority have
                                  g to use a passage of Lorem Ipsum, you need to be sure there isnt
                                  anything embarrassing
                              </p>

                              <p className="small font-bold">
                                  <span><i className="fa fa-circle text-navy"></i> Online status</span>
                                  </p>

                          </div>
                      </div>

                      <div className="ibox">
                          <div className="ibox-content">
                              <h3>Followers and friends</h3>
                              <p className="small">
                                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt
                                  anything embarrassing
                              </p>
                              <div className="user-friends">
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a3.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a1.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a2.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a4.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a5.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a6.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a7.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a8.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a2.jpg"/></a>
                                  <a href=""><img alt="imagecircle" className="img-circle" src="img/a1.jpg"/></a>
                              </div>
                          </div>
                      </div>

                      <div className="ibox">
                          <div className="ibox-content">
                              <h3>Personal friends</h3>
                              <ul className="list-unstyled file-list">
                                  <li><a href=""><i className="fa fa-file"></i> Project_document.docx</a></li>
                                  <li><a href=""><i className="fa fa-file-picture-o"></i> Logo_zender_company.jpg</a></li>
                                  <li><a href=""><i className="fa fa-stack-exchange"></i> Email_from_Alex.mln</a></li>
                                  <li><a href=""><i className="fa fa-file"></i> Contract_20_11_2014.docx</a></li>
                                  <li><a href=""><i className="fa fa-file-powerpoint-o"></i> Presentation.pptx</a></li>
                                  <li><a href=""><i className="fa fa-file"></i> 10_08_2015.docx</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="ibox">
                          <div className="ibox-content">
                              <h3>Private message</h3>

                              <p className="small">
                                  Send private message to Alex Smith
                              </p>

                              <div className="form-group">
                                  <label>Subject</label>
                                  <input type="email" className="form-control" placeholder="Message subject" />
                              </div>
                              <div className="form-group">
                                  <label>Message</label>
                                  <textarea className="form-control" placeholder="Your message" rows="3"></textarea>
                              </div>
                              <button className="btn btn-primary btn-block">Send</button>

                          </div>
                      </div>

                  </div>

                  <div className="col-lg-5">

                      <div className="social-feed-box">

                          <div className="pull-right social-action dropdown">
                              <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                                  <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="dropdown-menu m-t-xs">
                                  <li><a >Config</a></li>
                              </ul>
                          </div>
                          <div className="social-avatar">
                              <a href="" className="pull-left">
                                  <img alt="imagecircle" src="img/a1.jpg" />
                              </a>
                              <div className="media-body">
                                  <a >
                                      Andrew Williams
                                  </a>
                                  <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                              </div>
                          </div>
                          <div className="social-body">
                              <p>
                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                  default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                  in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                  default model text.
                              </p>

                              <div className="btn-group">
                                  <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> Like this!</button>
                                  <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> Comment</button>
                                  <button className="btn btn-white btn-xs"><i className="fa fa-share"></i> Share</button>
                              </div>
                          </div>
                          <div className="social-footer">
                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a1.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <a >
                                          Andrew Williams
                                      </a>
                                      Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                                      <br/>
                                      <a  className="small"><i className="fa fa-thumbs-up"></i> 26 Like this!</a> -
                                      <small className="text-muted">12.06.2014</small>
                                  </div>
                              </div>

                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a2.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <a >
                                          Andrew Williams
                                      </a>
                                      Making this the first true generator on the Internet. It uses a dictionary of.
                                      <br/>
                                      <a  className="small"><i className="fa fa-thumbs-up"></i> 11 Like this!</a> -
                                      <small className="text-muted">10.07.2014</small>
                                  </div>
                              </div>

                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a3.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <textarea className="form-control" placeholder="Write comment..."></textarea>
                                  </div>
                              </div>

                          </div>

                      </div>

                      <div className="social-feed-box">

                          <div className="pull-right social-action dropdown">
                              <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                                  <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="dropdown-menu m-t-xs">
                                  <li><a >Config</a></li>
                              </ul>
                          </div>
                          <div className="social-avatar">
                              <a href="" className="pull-left">
                                  <img alt="imagecircle" src="img/a6.jpg" />
                              </a>
                              <div className="media-body">
                                  <a >
                                      Andrew Williams
                                  </a>
                                  <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                              </div>
                          </div>
                          <div className="social-body">
                              <p>
                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                  default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                  in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                  default model text.
                              </p>
                              <p>
                                  Lorem Ipsum as their
                                  default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                  in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                  default model text.
                              </p>
                              <img src="img/gallery/3.jpg" alt="gallery" className="img-responsive" />
                              <div className="btn-group">
                                  <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> Like this!</button>
                                  <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> Comment</button>
                                  <button className="btn btn-white btn-xs"><i className="fa fa-share"></i> Share</button>
                              </div>
                          </div>
                          <div className="social-footer">
                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a1.jpg"/>
                                  </a>
                                  <div className="media-body">
                                      <a >
                                          Andrew Williams
                                      </a>
                                      Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                                      <br/>
                                      <a  className="small"><i className="fa fa-thumbs-up"></i> 26 Like this!</a> -
                                      <small className="text-muted">12.06.2014</small>
                                  </div>
                              </div>

                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a2.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <a >
                                          Andrew Williams
                                      </a>
                                      Making this the first true generator on the Internet. It uses a dictionary of.
                                      <br/>
                                      <a  className="small"><i className="fa fa-thumbs-up"></i> 11 Like this!</a> -
                                      <small className="text-muted">10.07.2014</small>
                                  </div>
                              </div>

                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a8.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <a >
                                          Andrew Williams
                                      </a>
                                      Making this the first true generator on the Internet. It uses a dictionary of.
                                      <br/>
                                      <a  className="small"><i className="fa fa-thumbs-up"></i> 11 Like this!</a> -
                                      <small className="text-muted">10.07.2014</small>
                                  </div>
                              </div>

                              <div className="social-comment">
                                  <a href="" className="pull-left">
                                      <img alt="imagecircle" src="img/a3.jpg" />
                                  </a>
                                  <div className="media-body">
                                      <textarea className="form-control" placeholder="Write comment..."></textarea>
                                  </div>
                              </div>

                          </div>

                      </div>




                  </div>
                  <div className="col-lg-4 m-b-lg">
                      <div id="vertical-timeline" className="vertical-container light-timeline no-margins">
                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon navy-bg">
                                  <i className="fa fa-briefcase"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Meeting</h2>
                                  <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.
                                  </p>
                                  <a  className="btn btn-sm btn-primary"> More info</a>
                                      <span className="vertical-date">
                                          Today <br/>
                                          <small>Dec 24</small>
                                      </span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon blue-bg">
                                  <i className="fa fa-file-text"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Send documents to Mike</h2>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since.</p>
                                  <a  className="btn btn-sm btn-success"> Download document </a>
                                      <span className="vertical-date">
                                          Today <br/>
                                          <small>Dec 24</small>
                                      </span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon lazur-bg">
                                  <i className="fa fa-coffee"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Coffee Break</h2>
                                  <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys. </p>
                                  <a  className="btn btn-sm btn-info">Read more</a>
                                  <span className="vertical-date"> Yesterday <br/><small>Dec 23</small></span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon yellow-bg">
                                  <i className="fa fa-phone"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Phone with Jeronimo</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                  <span className="vertical-date">Yesterday <br/><small>Dec 23</small></span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon navy-bg">
                                  <i className="fa fa-comments"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Chat with Monica and Sandra</h2>
                                  <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                                  <span className="vertical-date">Yesterday <br/><small>Dec 23</small></span>
                              </div>
                          </div>
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

export default Teacher;
