import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

class AuthenticatedRoutes extends React.Component {

  render() {
    const { user, children, location } = this.props;

    if(user) {
      return children;
      // TODO Extract route strings
    } else if(location.pathname !== '/login') {
      return <Redirect to="/login"/>;
    } else {
      return null;
    }
  }

}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedRoutes))