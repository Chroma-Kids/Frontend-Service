import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as React from 'react';

import Progress from '../progress/Progress';
import Navigation from '../navigation/NavigationBar';
import TopHeader from '../topheader/TopHeader';
import Footer from '../footer/Footer';


class App extends Component {
  componentDidUpdate() {
    const { userLoading, user } = this.props;
    if (userLoading === false && !user) {
      // this.props.history.push('/login');
    }
  }

  render() {
    const { user, children, userLoading } = this.props;

    let wrapperClass = "gray-bg " + this.props.location.pathname;

    let body = <div id="wrapper">
        <Progress />
        <Navigation location={this.props.location}/>

        <div id="page-wrapper" className={wrapperClass}>

            <TopHeader />

            {children}

            <Footer />
        </div>
    </div>;

    return (userLoading === false && !!user) ? body : <h1>hola</h1>
  }
}

function mapStateToProps(state) {
  return { user: state.user, userLoading: state.loading.user };
}

export default withRouter(connect(mapStateToProps)(App));
