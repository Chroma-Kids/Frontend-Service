import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
  userIsAuthenticated,
  user,
  location
}: Props) => {

  function activeRoute(location, routeName) {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

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
          <li className={activeRoute(location, "dashboard")}>
            <Link to="/dashboard"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
          </li>
          <li className={activeRoute(location, "config")}>
            <Link to="/config"><i className="fa fa-th-large"></i> <span className="nav-label">Config</span></Link>
          </li>
          <li className={activeRoute(location, "class")}>
            <Link to="/classrooms"><i className="fa fa-th-large"></i> <span className="nav-label">Classrooms</span></Link>
          </li>
          <li className={activeRoute(location, "teacher")} >
              <Link to="/teachers"><i className="fa fa-th-large"></i> <span className="nav-label">Teachers</span></Link>
          </li>
          <li className={activeRoute(location, "student")} >
              <Link to="/students"><i className="fa fa-th-large"></i> <span className="nav-label">Students</span></Link>
          </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state, ownProps) {
  return { user: state.user.user };
}

export default connect(mapStateToProps, null)(NavigationBar);
