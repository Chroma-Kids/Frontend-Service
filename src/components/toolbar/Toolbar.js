import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = ({title, button, buttonText}) => (
  <div className="row wrapper border-bottom white-bg page-heading">
    <div className="col-sm-4">
      <h2>{title}</h2>
      <ol className="breadcrumb">
          <li>
            <Link to={'/'}>
              <i className="fa fa-info" />
              Home
            </Link>
          </li>
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
    </div>
  </div>
);

export default Toolbar;
