import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AuthenticatedRoutes extends React.Component {

  render() {
    const { user, children } = this.props;
    return !user ? children : null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedRoutes))