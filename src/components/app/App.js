import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as React from 'react';
import Progress from '../progress/Progress';
import Navigation from '../navigation/NavigationBar';
import TopHeader from '../topheader/TopHeader';
import Footer from '../footer/Footer';

class App extends Component {

  // TODO extract to a component in charge of authentification that wraps the rest
  componentDidMount() {
    const { user } = this.props;
    if (user === undefined) {
      this.props.history.push('/login');
    }
  }

  // TODO extract to a component in charge of authentification that wraps the rest
  componentDidUpdate() {
    const { user } = this.props;
    if (user === undefined) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { children, user } = this.props;

    let wrapperClass = "gray-bg " + this.props.location.pathname;

    return ((user !== undefined) && (
      <div id="wrapper">
        <Progress/>
        <Navigation location={this.props.location}/>
        <div id="page-wrapper" className={wrapperClass}>
          <TopHeader/>
          {children}
          <Footer/>
        </div>
      </div>): null);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(App));
