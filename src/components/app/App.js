import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as React from 'react';

class App extends Component {
  componentDidUpdate() {
    const { userLoading, user } = this.props;
    if (userLoading === false && !user) {
      // this.props.history.push('/login');
    }
  }

  render() {
    const { user, children, userLoading } = this.props;
    console.log(userLoading === false, user)
    return (userLoading === false && !!user) ? <div>{children}</div>: <h1>hola</h1>
  }
}

function mapStateToProps(state) {
  return { user: state.user, userLoading: state.loading.user };
}

export default withRouter(connect(mapStateToProps)(App));
