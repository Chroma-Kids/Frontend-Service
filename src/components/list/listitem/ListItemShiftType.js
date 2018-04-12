import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'
import { ROUTES } from '../../../index';

const ListItemShiftType = (props) => {

  const { shiftType, itemKey, deleteShiftType, editShiftType } = props;

  return (
    <tr key={itemKey}>
        <td className="project-status">
            <span className="label label-success">{( shiftType.label ? shiftType.label : null )}</span>
        </td>
        <td className="project-title">
            {shiftType.name}
        </td>
        <td>
          <small>Created <Timestamp time={shiftType.created_at} format='ago' actualSeconds autoUpdate /></small>
          <br/>
          {( shiftType.updated_at != null ?
            <small>Updated <Timestamp time={shiftType.updated_at} format='ago' actualSeconds autoUpdate /></small> : null  )}
        </td>
        <td className="project-actions">
            {/*<a onClick={() => editShiftType(shiftType) } className="btn btn-success btn-sm"><i className="fa fa-cross"></i> Edit </a>*/}
            <button onClick={() => {
              deleteShiftType(itemKey)
            }} className="btn btn-white btn-sm"><i className="fa fa-trash-o"></i> Delete </button>
        </td>
    </tr>
  )
}

export default ListItemShiftType;
