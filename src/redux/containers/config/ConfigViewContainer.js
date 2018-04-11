import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ConfigView from '../../../views/config/ConfigView';
import { getShifts, removeShiftsListener } from '../../actions/ShiftActions';

export class ConfigViewContainer extends Component {

    componentDidMount(){
      this.props.getShifts();
    }

    componentWillUnmount(){
      this.props.removeShiftsListener();
    }

    render() {
      return (
        <div>
            <ConfigView {...this.props} />
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
      shifts: state.shifts.shifts
    }
}

const mapDispatchToProps = (dispatch, state)=> {
    return bindActionCreators({ getShifts, removeShiftsListener }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigViewContainer);
