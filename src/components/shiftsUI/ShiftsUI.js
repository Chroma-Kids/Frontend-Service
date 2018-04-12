import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Week from './Week'
import * as moment from 'moment';
import _ from 'lodash';

class TeachersWeeks extends Component {

  handleClick = () => {
    const { nowDayYear, dateDayYear, dateWeekDay, teacher, timestamp } = this.props;
    this.props.onHeaderClick(dateDayYear, dateWeekDay, teacher, timestamp);
  }

  render(){

    const { nowDayYear, dateDayYear, dateWeekDay, date, timestamp } = this.props;

    return (
      <td key={dateDayYear}
          onClick={this.handleClick}

          className={"fc-day-header fc-widget-header fc-sun "
            + (nowDayYear == dateDayYear ? 'currentDay' : "" )
            + ((dateWeekDay == 0) || (dateWeekDay == 6) ? 'weekend' : "" )}
          >
      </td>
    )
  }
}

class ShiftsUI extends Component {

  constructor(props) {
    super(props);
    this.state = { month: moment() }
  }

  previous() {
   var month = this.state.month;
   month.add(-1, "M");
   this.setState({ month: month });
  }

  today() {
   this.setState({ month: moment() });
  }

  next() {
   var month = this.state.month;
   month.add(1, "M");
   this.setState({ month: month });
  }

  fillDay(dateDayYear, dateWeekDay, teacher, dayName) {
    console.log(dateDayYear, dateWeekDay, teacher.name, dayName);
  }

  renderMonthLabel() {
    return <span>{this.state.month.format(" MMM YYYY ")}</span>;
  }

  renderHeaderDayName() {
    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month"),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<th key={date.format("D")}
          className={"fc-day-header fc-widget-header fc-sun "
             + (moment().format("DDD") == date.format("DDD") ? 'currentDay' : "" )
             + ((date.format("d") == 0) || (date.format("d") == 6) ? 'weekend' : "" )
          }>
          {date.format("dd")}</th>);
      date.add(1, "d");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderHeaderDayNumber() {
    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month"),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<th key={date.format("D")}

            className={"fc-day-header fc-widget-header fc-sun "
              + (moment().format("DDD") == date.format("DDD") ? 'currentDay' : "" )
              + ((date.format("d") == 0) || (date.format("d") == 6) ? 'weekend' : "" )
            }>{date.format("DD")}</th>);
      date.add(1, "d");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderTeachersWeeks(teacher) {

    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month"),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<TeachersWeeks
          teacher={teacher}
          timestamp={date.format("X")}
          onHeaderClick={this.fillDay}
          key={date.format("DDD")}
          dayName={date.format("dd")}
          dateDayYear={date.format("DDD")}
          nowDayYear={moment().format("DDD")}
          dateWeekDay={date.format("d")}
         />);
      date.add(1, "d");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
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
              <button type="button" onClick={()  => this.today()} className="btn btn-white m-r"> Today</button>
              <button type="button" onClick={()  => this.previous()} className="btn btn-white"><i className="fa fa-chevron-left"></i></button>
              {this.renderMonthLabel()}
              <button type="button" onClick={() => this.next()} className="btn btn-white"><i className="fa fa-chevron-right"></i></button>
            </div>
            <table className="teachersWeeks">
              <thead>
                <tr>
                  <td rowSpan="2">Teachers</td>
                  {this.renderHeaderDayNumber()}
                </tr>
                <tr>
                    {this.renderHeaderDayName()}
                </tr>
              </thead>
              <tbody>
                {_.map(teachers, (teacher, key) =>
                <tr key={key}>
                  <th>{ teacher.name }</th>
                  {this.renderTeachersWeeks(teacher)}
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
