// #region imports
import React, { type SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
// import Humburger from './humburger/Humburger';
// import LeftNav from './leftNav/LeftNav';
// import RightNav from './rightNav/RightNav';
// #endregion

// #region flow types
// export type Props = {
//   brand?: string,
//   userIsAuthenticated?: boolean,
//   handleLeftNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
//   handleRightNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
//   navModel: {
//     leftLinks: Array<{
//       label: string,
//       link: string,
//     }>,
//     rightLinks: Array<{
//       label: string,
//       link: string,
//     }>,
//   },
// };
// #endregion

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
  userIsAuthenticated,
}: Props) => {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
              <div className="dropdown profile-element"> <span>
               </span>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
               </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                      <li><a href="#"> Logout</a></li>
                  </ul>
              </div>
              <div className="logo-element">
                  IN+
              </div>
          </li>
          <li className="active">
              <a><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></a>
          </li>
          {/*<li className={this.activeRoute("/minor")}>
              <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></Link>
          </li>*/}
      </ul>
    </nav>
  );
};

// #region static props
// NavigationBar.propTypes = {
//   brand: PropTypes.string,
//   userIsAuthenticated: PropTypes.bool.isRequired,
//   handleLeftNavItemClick: PropTypes.func,
//   handleRightNavItemClick: PropTypes.func,
//   navModel: PropTypes.shape({
//     leftLinks: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         link: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     rightLinks: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         link: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//   }),
// };

// NavigationBar.defaultProps = {
//   brand: 'brand',
// };
//
// NavigationBar.displayName = 'NavigationBar';
// #endregion

export default NavigationBar;
