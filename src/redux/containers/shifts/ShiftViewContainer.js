import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {  } from '../../actions/ShiftActions';
import ShiftView from '../../../views/shifts/ShiftView';

export class ShiftViewContainer extends Component {

    componentDidMount(){
      // this.props.fetchShift(this.props.shiftId);
    }

    render() {
      return (
        <div>
            <ShiftView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        shift: state.shifts.currentShift,
        shiftId: ownProps.match.params.shiftId
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftViewContainer);
