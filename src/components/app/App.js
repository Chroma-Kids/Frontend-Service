import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as React from 'react';
import { auth } from '../../firebase'

import Progress from '../progress/Progress'
import Navigation from '../navigation/NavigationBar'
import TopHeader from '../topheader/TopHeader'
import Footer from '../footer/Footer'
import Login from '../../views/login'


const LoginOrChat = connect(
    (state) => ({
        authorized: state.authorized
    })
)(({ authorized, dispatch }) => {

    console.log(authorized)

    if (authorized) {

      const { user, children, userLoading, authorized } = this.props;
      let wrapperClass = "gray-bg " + this.props.location.pathname;

        return (<div id="wrapper">
          <Progress />
          <Navigation location={this.props.location}/>

          <div id="page-wrapper" className={wrapperClass}>

              <TopHeader />

              {children}

              <Footer />

          </div>

        </div>);
    }else{
        // dispatch(checkUserExists());
        return (<Login />);
    }
});

class App extends Component {
  componentDidUpdate() {
    const { userLoading, user, onSetAuthUser } = this.props;

    console.log(this.props)

    // auth.onAuthStateChanged(user => {
    //   user
    //     ? onSetAuthUser(user)
    //     : onSetAuthUser(null);
    // });

    // if (userLoading === false && !user) {
    //   // this.props.history.push('/login');
    // }
  }

  render() {
    // const { user, children, userLoading, authorized } = this.props;
    // let wrapperClass = "gray-bg " + this.props.location.pathname;

    // console.log(user, children, userLoading)
    // let body = <div id="wrapper">
    //   <Progress />
    //   <Navigation location={this.props.location}/>
    //
    //   <div id="page-wrapper" className={wrapperClass}>
    //
    //       <TopHeader />
    //
    //       {children}
    //
    //       <Footer />
    //
    //   </div>
    //
    // </div>
    //
    // return (authorized) ? body : null
    return (<LoginOrChat />)
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => ({
  onSetAuthUser: (user) => dispatch({ type: 'AUTH_USER_SET', user }),
});

export default withRouter(connect(mapStateToProps)(App));
