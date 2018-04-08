import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { ROUTES } from '../../index';

class AuthenticatedRoutes extends React.Component {

  render() {
    const { user, children, location } = this.props;

    const defaultRoute = ROUTES.NO_AUTHENTICATED.LOGIN;

    if (user) {
      return location.pathname !== '/' ? children : <Redirect to={ROUTES.AUTHENTICATED.DASHBOARD}/>;
    } else {
      return location.pathname !== defaultRoute ?
             <Redirect to={defaultRoute}/> : null
    }
  }

}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedRoutes))
