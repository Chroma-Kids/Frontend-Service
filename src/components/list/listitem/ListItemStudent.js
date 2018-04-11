import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'
import { ROUTES } from '../../../index';

const ListItemStudent = (props) => {

  const { student, itemKey, deleteStudent, classrooms } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-primary">Active</span>
        </td>
        <td className="project-title">
            <Link to={ROUTES.AUTHENTICATED.STUDENT(itemKey)}>{student.name} {student.surname}</Link>
            <br />
            <small>Created <Timestamp time={student.created_at} format='ago' actualSeconds autoUpdate /></small>
            <br />
            {( student.updated_at != null ?
              <small>Updated <Timestamp time={student.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
        </td>
        <td className="project-completion">
            <small>Completion with: 28%</small>
            <div className="progress progress-mini">
                <div  className="progress-bar"></div>
            </div>
        </td>
        <td className="project-people">
          {(!!classrooms && typeof student.classrooms !== "undefined" ?
            Object.keys(student.classrooms).map(key => {
              return <Link key={key} to={ROUTES.AUTHENTICATED.CLASSROOM(key)}><img alt={classrooms[key].name} className="img-circle"/></Link>;
            })
            :
            <div className="alert alert-warning m-b-none">
                Student not assigned to a classroom
            </div>
          )}
        </td>
        <td className="project-actions">
          <div className="btn-group">
            <Link to={ROUTES.AUTHENTICATED.STUDENT_EDIT(itemKey)} className="btn btn-white btn-sm"><i className="fa fa-edit"></i> Edit </Link>
            <button onClick={() => {
                deleteStudent(itemKey)
              }} className="btn btn-white btn-sm"><i className="fa fa-trash-o"></i> Delete
            </button>
          </div>
        </td>
    </tr>
  )
}

export default ListItemStudent;
