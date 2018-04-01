import React from 'react';
import _ from 'lodash';

const TableResponsive = (props) => {

  const { elements, children, fields } = props;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
        <tr>
            {_.map(fields, (field , key) =>
                <th key={key}>{field}</th>
            )}
        </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export default TableResponsive;
