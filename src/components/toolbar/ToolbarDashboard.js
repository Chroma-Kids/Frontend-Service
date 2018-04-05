import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeItLower } from '../../helpers/Helpers'
import _ from 'lodash';

class ToolbarDashboard extends Component {

  render(){
   const {title, breadcrumb, button, buttonText} = this.props;


    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-sm-4">
          <h2>{title}</h2>
          <ol className="breadcrumb">
              {_.map(breadcrumb, (key, val) => {
                return (
                  <li key={val}>
                    <Link to={`/${makeItLower(key)}`}>
                      <i className="fa fa-info" />
                      {key}
                    </Link>
                  </li>
                )
              })}
              <li className="active">
                  <strong>{title}</strong>
              </li>
          </ol>
        </div>
        <div className="col-sm-8">
          { (!buttonText ?
            null
            :
            <div className="title-action">
              <button className="btn btn-primary " onClick={button}>
                <i className="fa fa-info" />
                  {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ToolbarDashboard;
