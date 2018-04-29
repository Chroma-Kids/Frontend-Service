import React from 'react';
import Timestamp from 'react-timestamp';

const ActivityStream = ({ trajectory }) => {

  return (
    typeof trajectory !== "undefined" &&
      <div className="stream-small">
          <span className="label label-primary"> <Timestamp time={trajectory.create_at} format='full' /></span>
          <span className="text-muted"> From { trajectory.from } to { trajectory.to } </span>
      </div>
    )
};

export default ActivityStream;
