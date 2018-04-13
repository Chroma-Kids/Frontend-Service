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
      checkInTeacher, checkOutTeacher, moveTeacherToClassroom, shiftTypes } = this.props;

    const opacity = isDragging ? 0.5 : 1;

    let array = [];
    if(typeof teacher.shifts !== "undefined"){
        for (let [key, value] of Object.entries(teacher.shifts)) {
          array[key] = value;
        }
    }

    // TODO: to show the label for the corresponding date we need to replace
    // date.format("MMDDYYYY") by the date on the calendar dashbaord (the one that
    // miguel is doing)
    // (typeof teacher.shifts !== "undefined" ? array[date.format("MMDDYYYY")] : null)

    return connectDragSource(
      <li style={{ opacity }} key={key} className="warning-element clear float-left" >
          <Link to={ROUTES.AUTHENTICATED.TEACHER(teacherId)}>{teacher.name}</Link>
            <p>{(typeof shiftTypes !== "undefined" && teacher.shiftType != null ?
               shiftTypes[teacher.shiftType].label
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

              {
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
