import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      className: "nav nav-second-level collapse"
    }
  }

  activeRoute(location, routeName) {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  toggle(){
    const { open, className } = this.state;

    this.setState({
      open: !this.state.open
    });

    if(!this.state.open){
      this.setState({
        className: "nav nav-second-level collapse in"
      });
    }else{
      this.setState({
        className: "nav nav-second-level collapse"
      });
    }
  }

  render(){

   const {
      brand,
      navModel,
      handleLeftNavItemClick,
      handleRightNavItemClick,
      userIsAuthenticated,
      user,
      location
    } = this.props;

    const { open, className } = this.state;

    return (
      <nav className="navbar-default navbar-static-side">
        <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
                <div className="dropdown profile-element"> <span>
                    <img alt="imagecircle" className="img-circle img-nav-profile" src={user.photoURL} />
                 </span>
                    <a data-toggle="dropdown" className="dropdown-toggle">
                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{(user.displayName ? user.displayName : "-" )}</strong>
                 </span> <span className="text-muted text-xs block">{user.email}</span> </span> </a>
                </div>
                <div className="logo-element">
                    IN+
                </div>
            </li>
            <li className={this.activeRoute(location, "dashboard")}>
                <a onClick={()=> this.toggle(this) }><i className="fa fa-th-large"></i> <span className="nav-label">Dashboards</span></a>
                <ul className={"nav nav-second-level collapse in"} style={{height: "0px"}}>
                  <li className={this.activeRoute(location, "dashboard")}>
                    <Link to="/dashboard" ><i className="fa fa-dashboard"></i> <span className="nav-label">Teachers daily flow</span></Link>
                  </li>
                </ul>
            </li>
            {/*<li className={this.activeRoute(location, "dashboard")}>
              <Link to="/dashboard"><i className="fa fa-dashboard"></i> <span className="nav-label">Dashboard</span></Link>
            </li>*/}
            <li className={this.activeRoute(location, "class")}>
              <Link to="/classrooms"><i className="fa fa-university"></i> <span className="nav-label">Classrooms</span></Link>
            </li>
            <li className={this.activeRoute(location, "teacher")} >
                <Link to="/teachers"><i className="fa fa-graduation-cap"></i> <span className="nav-label">Teachers</span></Link>
            </li>
            <li className={this.activeRoute(location, "student")} >
                <Link to="/students"><i className="fa fa-group"></i> <span className="nav-label">Students</span></Link>
            </li>
            <li className={this.activeRoute(location, "config")}>
              <Link to="/config"><i className="fa fa-wrench"></i> <span className="nav-label">Config</span></Link>
            </li>

        </ul>
      </nav>
    );
  }


};

function mapStateToProps(state, ownProps) {
  return { user: state.user.user };
}

export default connect(mapStateToProps, null)(NavigationBar);
