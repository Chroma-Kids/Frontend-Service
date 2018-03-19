// #region imports
import React, { type SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
  userIsAuthenticated,
  user
}: Props) => {


var displayName = user.displayName;
var email = user.email;
var emailVerified = user.emailVerified;
var photoURL = user.photoURL;
var isAnonymous = user.isAnonymous;
var uid = user.uid;
var providerData = user.providerData;

console.log(photoURL)

  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
              <div className="dropdown profile-element"> <span>
                  <img alt="image" className="img-circle img-nav-profile" src={photoURL} />
               </span>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{(user.displayName ? user.displayName : "-" )}</strong>
               </span> <span className="text-muted text-xs block">{user.email}</span> </span> </a>
              </div>
              <div className="logo-element">
                  IN+
              </div>
          </li>
          <li className="active">
            <Link to="/classes"><i className="fa fa-th-large"></i> <span className="nav-label">Classes</span></Link>
          </li>
          <li >
              <Link to="/"><i className="fa fa-th-large"></i> <span className="nav-label">Teachers</span></Link>
          </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

export default connect(mapStateToProps, null)(NavigationBar);
