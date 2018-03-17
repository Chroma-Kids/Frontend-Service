// #region imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Jumbotron from '../../components/jumbotron/Jumbotron';
import { type Match, type Location, type RouterHistory } from 'react-router';
// import classnames from 'classnames';
// import styles from './pageNotFound.scss';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
  ...any,
};
type State = any;
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

class PageNotFound extends PureComponent<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
      <div className="middle-box text-center animated fadeInDown">
              <h1>404</h1>
              <h3 className="font-bold">Page Not Found</h3>

              <div className="error-desc">
                  Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.
                  <form className="form-inline m-t" role="form">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search for page"/>
                      </div>
                      <button type="submit" className="btn btn-primary">Search</button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default PageNotFound;
