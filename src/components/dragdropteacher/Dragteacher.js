// Let's make <TeacherDrag text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { Link } from 'react-router-dom';

const Types = {
  TEACHER: 'teacher'
};

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text,
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
  text: PropTypes.string.isRequired,
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class TeacherDrag extends Component {
  render() {
    const { isDragging, connectDragSource, text, key, teacherId } = this.props;
    return connectDragSource(
      <li style={{ opacity: isDragging ? 0.5 : 1 }} key={key} className="warning-element" >
          <Link to={`/teacher/${teacherId}`}>{text}</Link>
          <div className="agile-detail">
              <a  className="pull-right btn btn-xs btn-white">show breaks done</a>
              <i className="fa fa-clock-o"></i> show Hours (minutes) completed
          </div>
      </li>
    );
  }
}

TeacherDrag.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(Types.TEACHER, cardSource, collect)(TeacherDrag);
