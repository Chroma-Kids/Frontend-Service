import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  hideSearchToolbar: PropTypes.bool.isRequired,
  buttonToolbarText: PropTypes.string.isRequired,
  buttonToolbar: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

const List = (props) => {

  const { children, className, hideSearchToolbar, title, subtitle,
  buttonToolbarText, buttonToolbar, list } = props;

  return (
    <section className={className}>
      <div className="ibox">
        { typeof title !== "undefined" && <div className="ibox-title">
          <a onClick={buttonToolbar} className="pull-right m-t-n-xs btn btn-xs btn-primary"> { buttonToolbarText }</a>
          <h5>{title} <small>{subtitle}</small></h5>
        </div> }
        <div className="ibox-content">
          { !hideSearchToolbar && <div className="row m-b-sm m-t-sm">
              <div className="col-md-1">
                  <button type="button" id="loading-example-btn" className="btn btn-white btn-sm"><i className="fa fa-refresh"></i> Refresh</button>
              </div>
              <div className="col-md-11">
                  <div className="input-group"><input type="text" placeholder="Search" className="input-sm form-control"/> <span className="input-group-btn">
                      <button type="button" className="btn btn-sm btn-primary"> Go!</button> </span></div>
              </div>
          </div>}

          <div className="project-list">
            { typeof list !== "undefined" ?
            <table className="table table-hover">
              <tbody>
                {children}
              </tbody>
            </table> :
            <div className="spiner-example">
                <div className="sk-spinner sk-spinner-double-bounce">
                    <div className="sk-double-bounce1"></div>
                    <div className="sk-double-bounce2"></div>
                </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default List;
