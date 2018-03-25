import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../redux/actions/UserActions';

class Session extends React.Component {

  componentDidMount() {
    const { user, location } = this.props;
    if (!user) {
      // TODO Extract route string
      this.props.getUser(() => this.props.history.push(location.pathname || '/teachers'));
    }
  }

  render() {
      return this.props.children;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser,
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Session))
