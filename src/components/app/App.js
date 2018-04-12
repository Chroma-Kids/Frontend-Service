import React from 'react';
import { withRouter } from 'react-router-dom';
import Progress from '../progress/Progress';
import Navigation from '../navigation/NavigationBar';
import TopHeader from '../topheader/TopHeader';
import Footer from '../footer/Footer';

class App extends React.Component {

  render() {
    const { children } = this.props;

    let wrapperClass = "gray-bg " + this.props.location.pathname;

    return (
      <div id="wrapper">
        <Progress/>
        <Navigation location={this.props.location} />
        <div id="page-wrapper" className={wrapperClass}>
          <TopHeader/>
          {children}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
