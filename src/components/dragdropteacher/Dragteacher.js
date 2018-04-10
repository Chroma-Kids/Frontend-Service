// Let's make <TeacherDrag text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp'

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
  checkInTeacher: PropTypes.func.isRequired
};

class TeacherDrag extends Component {
  render() {
    const { isDragging, connectDragSource, text, key, teacherId, teacher, checkInTeacher } = this.props;

    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(
      <li style={{ opacity }} key={key} className="warning-element" >
          <Link to={`/teacher/${teacherId}`}>{teacher.name}</Link>
          <div className="agile-detail">
              {
                (typeof teacher.checked_in === "undefined" ? <a className="pull-right btn btn-xs btn-white" onClick={() => {this.props.checkInTeacher(teacherId)}}>Check {teacher.name} in</a> : null)
              }
              <i className="fa fa-clock-o"></i> {
                (typeof teacher.checked_in !== "undefined" ? <span className="label label-success">IN</span> : "-")
              }
          </div>
      </li>
    );
  }
}

TeacherDrag.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(Types.TEACHER, cardSource, collect)(TeacherDrag);
