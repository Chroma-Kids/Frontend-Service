import React from 'react';
import Timestamp from 'react-timestamp'

const TableRowStudent = (props) => {

  const { studentKey, student } = props;

  return (
    (!!student &&
      <tr key={studentKey}>
          <td>{studentKey}</td>
          <td>{student.name} {student.surname}</td>
          <td>-</td>
          <td>-</td>
          {/*<td><span className="pie" style={{display: "none"}}>0.52/1.561</span><svg className="peity" height="16" width="16"><path d="M 8 8 L 8 0 A 8 8 0 0 1 14.933563796318165 11.990700825968545 Z" fill="#1ab394"></path><path d="M 8 8 L 14.933563796318165 11.990700825968545 A 8 8 0 1 1 7.999999999999998 0 Z" fill="#d7d7d7"></path></svg></td>*/}
          <td><Timestamp time={student.updated_at} format='full' /></td>
          <td><Timestamp time={student.created_at} format='full' /></td>
          <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
      </tr>)
  )
}

export default TableRowStudent;
