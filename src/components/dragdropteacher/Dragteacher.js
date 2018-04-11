// Let's make <TeacherDrag text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../index';

const Types = {
  TEACHER: 'teacher'
};

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      teacher: props.teacher,
      classroomId: props.classroomId,
      recording: props.recording,
      teacherId: props.teacherId
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  teacher: PropTypes.object.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  checkInTeacher: PropTypes.func.isRequired,
  checkOutTeacher: PropTypes.func.isRequired
};

class TeacherDrag extends Component {
  render() {
    const { isDragging, connectDragSource, key, teacherId, teacher, classroomId,
      checkInTeacher, checkOutTeacher, moveTeacherToClassroom, shifts } = this.props;

    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(
      <li style={{ opacity }} key={key} className="warning-element clear" >
          <Link to={ROUTES.AUTHENTICATED.TEACHER(teacherId)}>{teacher.name}</Link>
            <p>{(typeof shifts !== "undefined" && teacher.shift != null ?
               shifts[teacher.shift].label
             : "No shift assigned" )}
           </p>

          <div className="agile-detail">
              {
                (typeof teacher.checked_in === "undefined" && typeof teacher.checked_out === "undefined" ?
                <a className="pull-right btn btn-xs btn-white"
                  onClick={() => { checkInTeacher(teacherId) } }>Check {teacher.name} in</a> : null ) }

              { (typeof teacher.checked_in !== "undefined" && typeof teacher.checked_out === "undefined" ?
                <a className="pull-right btn btn-xs btn-white"
                    onClick={() => { checkOutTeacher(teacherId); moveTeacherToClassroom(teacherId, classroomId) } }>Check {teacher.name} out</a> : null )
              }

              <i className="fa fa-clock-o"></i> {
                (typeof teacher.checked_in !== "undefined" && typeof teacher.checked_out === "undefined"  ? <span className="label label-success">IN</span> : null)}
                {
                (typeof teacher.checked_in !== "undefined" && typeof teacher.checked_out !== "undefined" ? <span className="label label-danger">OUT</span> : null)
              }
          </div>
      </li>
    );
  }
}

TeacherDrag.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(Types.TEACHER, cardSource, collect)(TeacherDrag);
