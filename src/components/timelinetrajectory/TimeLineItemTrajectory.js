import React from 'react';
import Timestamp from 'react-timestamp';

const TimeLineItemTrajectory = ({ trajectory }) => {

  return ( !!trajectory &&
    <div className="timeline-item">
      <div className="row">
        <div className="col-xs-3 date">
            <i className="fa fa-briefcase"></i>
            <Timestamp time={trajectory.create_at} format='full' />
            <br/>
            <small className="text-navy"><Timestamp time={trajectory.create_at} format='ago' actualSeconds autoUpdate /></small>
        </div>
        <div className="col-xs-7 content no-top-border">
          <p className="m-b-xs"><strong>Meeting</strong></p>

          <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the
              sale.</p>
        </div>
      </div>
    </div>
    : null
  )
};

export default TimeLineItemTrajectory;
