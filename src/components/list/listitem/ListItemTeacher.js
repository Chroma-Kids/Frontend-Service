import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'

const ListItemTeacher = (props) => {

  const { teacher, itemKey, deleteTeacher } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-primary">Active</span>
        </td>
        <td className="project-title">
            <Link to={`/teacher/${itemKey}`}>{teacher.name} {teacher.surname}</Link>
            <br />
            <small>Created <Timestamp time={teacher.created_at} format='ago' actualSeconds autoUpdate /></small>
            <br />
            {( teacher.updated_at != null ?
              <small>Updated <Timestamp time={teacher.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
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
            <Link to={`/teacher/${itemKey}/edit`} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Edit </Link>
            <button onClick={() => {
              deleteTeacher(itemKey)
            }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete </button>
        </td>
    </tr>
  )
}

export default ListItemTeacher;
