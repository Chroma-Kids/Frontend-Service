import React from 'react';
import { Link } from 'react-router-dom';

import { makeItLower } from '../../helpers/Helpers'
import _ from 'lodash';


const Toolbar = ({title, breadcrumb, button, buttonText, link, linkText}) => (
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
            + {buttonText}
          </button>
        </div>
      )}
      { (!linkText ?
        null
        :
        <div className="title-action">
          <Link className="btn btn-success " to={link}>
            <i className="fa fa-info" />
            + {linkText}
          </Link>
        </div>
      )}
    </div>
  </div>
);

export default Toolbar;
