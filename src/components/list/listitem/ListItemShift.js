import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'
import { ROUTES } from '../../../index';

const ListItemShift = (props) => {

  const { shift, itemKey, deleteShift, editShift } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-success">{( shift.label ? shift.label : null )}</span>
        </td>
        <td className="project-title">
            <Link to={ROUTES.AUTHENTICATED.TEACHER(itemKey)}>{shift.name} {shift.surname}</Link>
            <br/>
            Created <Timestamp time={shift.created_at} format='ago' actualSeconds autoUpdate />
            <br/>
            {( shift.updated_at != null ?
              <small>Updated <Timestamp time={shift.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
        </td>
        <td className="project-actions">
            {/*<a onClick={() => editShift(shift) } className="btn btn-success btn-sm"><i className="fa fa-cross"></i> Edit </a>*/}
            <button onClick={() => {
              deleteShift(itemKey)
            }} className="btn btn-white btn-sm"><i className="fa fa-cross"></i> Delete </button>
        </td>
    </tr>
  )
}

export default ListItemShift;
