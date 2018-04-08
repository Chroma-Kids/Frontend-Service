import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { reset } from 'redux-form';
import Toolbar from '../../components/toolbar/Toolbar'
import TableResponsive from '../../components/tableresponsive/TableResponsive'
import TableRowStudent from '../../components/tableresponsive/TableRowStudent'
import Popup from '../../components/popup/Popup'
import Select from 'react-select';
import { ROUTES } from '../../index';

class Classroom extends PureComponent<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      selectedOption: ''
    }
  }

  toggleMenu(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onSubmit(values){
    const { selectedOption } = this.state;
    const { classroom, classroom_id } = this.props;

    classroom.id = classroom_id;

    if(selectedOption !== null){
      this.props.addStudentToClassroom(classroom, selectedOption.value);
      this.setState({
        showPopup: !this.state.showPopup
      });
      this.props.dispatch(reset('AddStudent'))
    }
  }

  // To handle the select from the popup
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {

    const { classroom, teachers, students, handleSubmit } = this.props;

    const { selectedOption } = this.state;

    const value = selectedOption && selectedOption.value;

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
          <Popup
            showhide={this.state.showPopup}
            title={"Add a new student"}
            description={"Select a student to be added to this classroom."}
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            buttonClose={this.toggleMenu.bind(this)} >
              {(typeof students !== "undefined" ?
                    <Select
                      name="form-field-name"
                      value={value}
                      onChange={this.handleChange}
                      options={Object.keys(students)
                        .filter(obj => (!!classroom.students ? !classroom.students[obj] : obj))
                        .map(obj => ({ value: obj, label: students[obj].name }))}
                    />
              :
              <p>Loading popup</p>)}
          </Popup>

          <Toolbar
            title={`${classroom.name}`}
            button={this.toggleMenu.bind(this)}
            buttonText={"Add student"}
            breadcrumb={['Dashboard', 'Classrooms']} />

          <div className="row">
            <div className="col-lg-12">
                <div className="wrapper wrapper-content animated fadeInUp">
                    <div className="ibox-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="m-b-md">
                                    <a className="btn btn-white btn-xs pull-right">Edit project</a>
                                    <h2>{classroom.name} class</h2>
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
                                    <dt>Client:</dt> <dd><a className="text-navy"> Zender Company</a> </dd>
                                    <dt>Version:</dt> <dd> 	v1.4.2 </dd>
                                </dl>
                            </div>
                            <div className="col-lg-7" id="cluster_info">
                                <dl className="dl-horizontal">
                                    <dt>Teachers:</dt>

                                    <dd className="project-people">

                                    {(typeof classroom.teachers !== "undefined" ?
                                      Object.keys(classroom.teachers).map(key => {
                                        // TODO: Fails if teachers are not loaded
                                        return <Link to={ROUTES.AUTHENTICATED.TEACHER(key)} key={key} ><img alt={teachers[key].name} className="img-circle" src={teachers[key].photoURL} /></Link>;
                                      })
                                      :
                                      <div className="alert alert-warning">
                                          No teachers assigned to this classroom.
                                      </div>
                                    )}

                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <dl className="dl-horizontal">
                                    <dt>Ratio:</dt>
                                    <dd>
                                        <div className="progress progress-striped active m-b-sm">
                                            <div style={{width: '60%'}} className="progress-bar"></div>
                                        </div>
                                        <small>The ratio for this classroom is <strong>{classroom.ratio}</strong>. Based on the ratio, there should X teachers for the Y kids in this classroom.</small>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="row m-t-sm">
                          <div className="col-lg-12">
                            <div className="panel blank-panel">

                              {( typeof classroom.students !== "undefined" && typeof students !== "undefined" && classroom.students != null ?
                                <TableResponsive
                                  fields={["", "Full Name", "Date of birth", "Alergies", "Updated", "Created", ""]} >
                                   {
                                     Object.keys(classroom.students).map((student, index) => {
                                       return (<TableRowStudent studentKey={student} key={index} student={students[student]} {...this.props} />)
                                     })
                                   }
                                </TableResponsive>
                                :
                                <div className="alert alert-warning">
                                    No students assigned to this classroom.
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="col-lg-3">
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
            </div>*/}
          </div>
        </div>
      )
    );
  }
}

export default Classroom;
