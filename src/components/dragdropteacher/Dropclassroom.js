// Let's make <ClassroomDrop text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { moveTeacherToClassroom } from '../../redux/actions/TeacherActions';

const Types = {
  TEACHER: 'teacher'
};

/**
 * Implements the drag source contract.
 */
 const listTarget = {
   drop(props, source) {
      moveTeacherToClassroom(source.getItem().teacherid, props.classroomId)
   }
 };

/**
 * Specifies the props to inject into your component.
 */
 function collect(connect, monitor) {
   return {
     connectDropTarget: connect.dropTarget(),
     isOver: monitor.isOver()
   };
 }

const propTypes = {
  // Injected by React DnD:
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

class ClassroomDrop extends Component {
  render() {
    const { isOver, connectDropTarget, children, classroomId } = this.props;

    return connectDropTarget(
      <ul className="sortable-list connectList agile-list ui-sortable" id={classroomId}>
        { children }
      </ul>
    );
  }
}

ClassroomDrop.propTypes = propTypes;


ClassroomDrop = connect((state, ownProps) => ({
  }), { moveTeacherToClassroom }
)(ClassroomDrop);

// Export the wrapped component:
export default DropTarget(Types.TEACHER, listTarget, collect)(ClassroomDrop);
