import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getShiftTypes, createShiftType, deleteShiftType, removeShiftTypesListener } from '../../actions/ShiftActions';
// import { getClassrooms, removeClassroomsListener } from '../../actions/ClassroomActions';
import ShiftTypesList from '../../../views/shifttypes/ShiftTypesList';

export class ShiftTypesListContainer extends Component {

    componentDidMount(){
      this.props.getShiftTypes();
      // this.props.getClassrooms();
    }

    componentWillUnmount(){
      this.props.removeShiftTypesListener();
      // this.props.removeClassroomsListener();
    }

    render() {
      return (
        <div>
            <ShiftTypesList {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        shiftTypes: state.shifts.shiftTypes,
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({
      getShiftTypes, createShiftType, deleteShiftType, getShiftTypes,
      removeShiftTypesListener }, dispatch);
}

let newShiftTypeForm = reduxForm({
    form: 'NewShiftType'
})(ShiftTypesListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(newShiftTypeForm);
