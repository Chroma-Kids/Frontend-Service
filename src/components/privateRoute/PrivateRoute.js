// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { login, getUser } from '../../redux/actions/UserActions';
// #endregion

class PrivateRoute extends Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const { onSetAuthUser } = this.props;

    auth.onAuthStateChanged(authUser => {

      console.log("componentDidMount PrivateRoute", authUser)

      authUser
        ? onSetAuthUser(authUser)
        : onSetAuthUser(null);
    });
  }

  render() {
    const { component: BaseComponent, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();

    console.log(isUserAuthenticated)

    return (
      <Route
        {...rest}
        render={props =>
          isUserAuthenticated ? (
            <BaseComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }

  isAuthenticated() {
    return !!this.props.onSetAuthUser;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
});

export default connect(null, mapDispatchToProps)(withRouter(PrivateRoute));
