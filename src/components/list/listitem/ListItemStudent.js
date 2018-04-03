import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'

const ListItemStudent = (props) => {

  const { student, itemKey, deleteStudent } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-primary">Active</span>
        </td>
        <td className="project-title">
            <Link to={`/student/${itemKey}`}>{student.name} {student.surname}</Link>
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
            <a href=""><img alt="circles" className="img-circle" src="img/a7.jpg"/></a>
            <a href=""><img alt="circles" className="img-circle" src="img/a6.jpg"/></a>
            <a href=""><img alt="circles" className="img-circle" src="img/a3.jpg"/></a>
        </td>
        <td className="project-actions">
            <Link to={`/student/${itemKey}/edit`} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Edit </Link>
            <button onClick={() => {
              deleteStudent(itemKey)
            }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete </button>
        </td>
    </tr>
  )
}

export default ListItemStudent;
