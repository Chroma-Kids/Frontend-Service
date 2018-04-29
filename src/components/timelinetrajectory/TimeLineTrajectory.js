import React from 'react';
import Timestamp from 'react-timestamp';
import TimeLineItemTrajectory from './TimeLineItemTrajectory';

const TimeLineTrajectory = ({ teacher, trajectories }) => {

  return (
    <div className="ibox">
      <div className="ibox-content ibox-heading">
          <h3>{ teacher.name } is in this classroom!</h3>
          <small><i className="fa fa-map-marker"></i> Meeting is on 6:00am. Check your schedule to see detail.</small>
      </div>
      <div className="ibox-content inspinia-timeline">

        {(typeof teacher.trajectories !== "undefined" && typeof trajectories !== "undefined" ?
          Object.keys(teacher.trajectories).reverse().map(key => {
            return <TimeLineItemTrajectory
              key={key}
              trajectory={trajectories[key]}
            />;
            // return <Link to={`/teacher/${key}`} key={key} ><img alt={teachers[key].name} className="img-circle" src={teachers[key].photoURL} /></Link>;
          })
          :
          <div className="alert alert-warning">
              { teacher.name } has no trajectory.
          </div>
        )}


      </div>
    </div>
  )
};

export default TimeLineTrajectory;
