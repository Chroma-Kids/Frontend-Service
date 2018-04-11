import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'
import { ROUTES } from '../../../index';

const ListItemTeacher = (props) => {

  const { teacher, itemKey, deleteTeacher } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
          {
            (typeof teacher.checked_in !== "undefined" && typeof teacher.checked_out === "undefined"  ? <span className="label label-success">IN</span> : null)}
            {
            (typeof teacher.checked_in !== "undefined" && typeof teacher.checked_out !== "undefined" ? <span className="label label-danger">OUT</span> : null)
          }
        </td>
        <td className="project-title">
            <Link to={ROUTES.AUTHENTICATED.TEACHER(itemKey)}>{teacher.name} {teacher.surname}</Link>
        </td>
        <td className="project-title">
            <small>Created <Timestamp time={teacher.created_at} format='ago' actualSeconds autoUpdate /></small>
            <br />
            {( teacher.updated_at != null ?
              <small>Updated <Timestamp time={teacher.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
        </td>
        {/*<td className="project-completion">
            <small>Completion with: 28%</small>
            <div className="progress progress-mini">
                <div  className="progress-bar"></div>
            </div>
        </td>*/}
        <td className="project-people">
            <a href=""><img alt="cirsl" className="img-circle" src="img/a7.jpg"/></a>
            <a href=""><img alt="cirsl" className="img-circle" src="img/a6.jpg"/></a>
            <a href=""><img alt="cirsl" className="img-circle" src="img/a3.jpg"/></a>
        </td>
        <td className="project-actions">
          <div class="btn-group">
            <Link to={ROUTES.AUTHENTICATED.TEACHER_EDIT(itemKey)} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Edit </Link>
            <button onClick={() => {
                deleteTeacher(itemKey)
              }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete
            </button>
          </div>
        </td>
    </tr>
  )
}

export default ListItemTeacher;
