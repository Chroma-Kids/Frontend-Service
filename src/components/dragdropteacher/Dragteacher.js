// Let's make <TeacherDrag text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

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
      classroomid: props.classroomid,
      teacherid: props.teacherid
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
    const { isDragging, connectDragSource, text, key, teacherid, classroomid } = this.props;
    return connectDragSource(
      <li style={{ opacity: isDragging ? 0.5 : 1 }} key={key} teacherid={teacherid} className="warning-element" >
          {text}
          <div className="agile-detail">
              <a href="#" className="pull-right btn btn-xs btn-white">First break</a>
              <i className="fa fa-clock-o"></i> 12.10.2015
          </div>
      </li>
    );
  }
}

TeacherDrag.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(Types.TEACHER, cardSource, collect)(TeacherDrag);
