import React from 'react';
import _ from 'lodash';
import ListItem from './listitem/ListItem'

const List = (props) => {

  const { elements } = props;

  return (
    <section className="students">
      <div className="ibox">
        <div className="ibox-content">
          <div className="row m-b-sm m-t-sm">
              <div className="col-md-1">
                  <button type="button" id="loading-example-btn" className="btn btn-white btn-sm"><i className="fa fa-refresh"></i> Refresh</button>
              </div>
              <div className="col-md-11">
                  <div className="input-group"><input type="text" placeholder="Search" className="input-sm form-control"/> <span className="input-group-btn">
                      <button type="button" className="btn btn-sm btn-primary"> Go!</button> </span></div>
              </div>
          </div>

          <div className="project-list">
            <table className="table table-hover">
              <tbody>
              { _.map(elements, (student, key) =>
                  <ListItem {...props} key={key} itemKey={key} element={student} />
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default List;
