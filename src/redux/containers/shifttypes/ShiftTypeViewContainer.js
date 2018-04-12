import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchShiftType } from '../../actions/ShiftActions';
import ShiftTypeView from '../../../views/shifttypes/ShiftTypeView';

export class ShiftTypeViewContainer extends Component {

    componentDidMount(){
      this.props.fetchShiftType(this.props.shiftTypeId);
    }

    render() {
      return (
        <div>
            <ShiftTypeView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        shiftType: state.shifts.currentShiftType,
        shiftTypeId: ownProps.match.params.shiftTypeId
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ fetchShiftType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftTypeViewContainer);
