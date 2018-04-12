import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Week from './Week'
import * as moment from 'moment';
import _ from 'lodash';

class ShiftsUI extends Component {

  constructor(props) {
    super(props);
    this.state = { month: moment().add(1, "M") }
  }


  previous() {
   var month = this.state.month;
   month.add(-1, "M");
   this.setState({ month: month });
  }

  next() {
   var month = this.state.month;
   month.add(1, "M");
   this.setState({ month: month });
  }

  renderMonthLabel() {
    return <span>{this.state.month.format(" MMM YYYY ")}</span>;
  }

  renderDayNames() {
    return(
      <div className="week names">
      <span className="day">Sun</span>
      <span className="day">Mon</span>
      <span className="day">Tue</span>
      <span className="day">Wed</span>
      <span className="day">Thu</span>
       	<span className="day">Fri</span>
       	<span className="day">Sat</span>
    </div>);
  }

  renderHeaderWeeks() {
    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
      monthIndex = date.month(),
      count = 0;

      console.log(date.toString());

    while (!done) {
      weeks.push(<th className="fc-day-header fc-widget-header fc-sun">{date.format("DD")}</th>);
      date.add(1, "d");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
      console.log(count, monthIndex);
    }

    return weeks;
  }

  renderTeachersWeeks() {


    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
      monthIndex = date.month(),
      count = 0;

      console.log(date.toString());

    while (!done) {
      weeks.push(<td className="fc-day-header fc-widget-header fc-sun"> . </td>);
      date.add(1, "d");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
      console.log(count, monthIndex);
    }

    return weeks;
  }

  render() {

    const { teachers } = this.props;

    return (
      <div className="ibox">
        <div className="ibox-content">
          <div className="shifts">
            <div className="header">
              <button type="button" onClick={()  => this.previous()} className="btn btn-white"><i className="fa fa-chevron-left"></i></button>
              {this.renderMonthLabel()}
              <button type="button" onClick={() => this.next()} className="btn btn-white"><i className="fa fa-chevron-right"></i></button>
            </div>
            <table className="teachersWeeks">
              <thead>
                <tr>
                  <th>Teacher</th>
                  {this.renderHeaderWeeks()}
                </tr>
              </thead>
              <tbody>
                {_.map(teachers, (teacher, key) =>
                <tr>
                  <td>{ teacher.name }</td>
                  {this.renderTeachersWeeks()}
                </tr>
                 )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    teachersLoading: state.loading.teachers,
    studentsLoading: state.loading.students,
    classroomsLoading: state.loading.classroom,
  };
}

export default withRouter(connect(mapStateToProps)(ShiftsUI))
