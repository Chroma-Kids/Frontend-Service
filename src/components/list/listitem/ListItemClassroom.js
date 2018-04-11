import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'
import { ROUTES } from '../../../index';

const ListItemClassroom = (props) => {

  const { classroom, itemKey, deleteClassroom } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-primary"> Ratio {classroom.ratio}</span>
        </td>
        <td className="project-title">
            <Link to={ROUTES.AUTHENTICATED.CLASSROOM(itemKey)}>{classroom.name}</Link>
            <br />
            <small>{classroom.description}</small>
        </td>
        <td className="project-title">
            <small>Created <Timestamp time={classroom.created_at} format='ago' actualSeconds autoUpdate /></small>
            <br />
            {( classroom.updated_at != null ?
              <small>Updated <Timestamp time={classroom.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
        </td>
        {/*<td className="project-completion">
            <small>Completion with: 28%</small>
            <div className="progress progress-mini">
                <div  className="progress-bar"></div>
            </div>
        </td>*/}
        <td className="project-people">
            <a href=""><img alt="imagecircle" className="img-circle" src="img/a7.jpg"/></a>
            <a href=""><img alt="imagecircle" className="img-circle" src="img/a6.jpg"/></a>
            <a href=""><img alt="imagecircle" className="img-circle" src="img/a3.jpg"/></a>
        </td>
        <td className="project-actions">
          <div class="btn-group">

            <Link to={ROUTES.AUTHENTICATED.CLASSROOM_EDIT(itemKey)} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Edit </Link>
            <button onClick={() => {
              deleteClassroom(itemKey)
            }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete </button>
          </div>
        </td>
    </tr>
  )
}

export default ListItemClassroom;
