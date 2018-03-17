import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase';

const authentication = (Component) => {
  class Authentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;

      auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(null, mapDispatchToProps)(Authentication);
}

export default authentication;
