import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Week from './Week'
import * as moment from 'moment';
import _ from 'lodash';
import Popup from '../popup/Popup'
import Select from 'react-select';

class TeachersWeeks extends Component {

  handleClick = () => {
    const { nowDayYear, dateDayYear, dateWeekDay, teacher, timestamp, teacherId } = this.props;
    this.props.onHeaderClick(dateDayYear, dateWeekDay, teacher, timestamp, teacherId);
  }

  render(){

    const { nowDayYear, dateDayYear, dateWeekDay, date, teacher, timestamp, teacherId, shifts, shiftTypes } = this.props;

    return (
      <td key={dateDayYear}
          onClick={((dateWeekDay == 0) || (dateWeekDay == 6) ? null : this.handleClick )}

          className={" "
            + (nowDayYear == dateDayYear ? 'currentDay' : "" )
            + ((dateWeekDay == 0) || (dateWeekDay == 6) ? 'weekend' : "" )}
          >
          {(shifts && typeof shiftTypes !== "undefined" ? shiftTypes[shifts.shiftType].label.substring(0,1) : "")}
      </td>
    )
  }
}

class ShiftsUI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      selectedOption: '',
      month: moment()
    }
  }

  toggleMenu(dateDayYear, dateWeekDay, teacher, timestamp, teacherId){

    this.setState({
      showPopup: !this.state.showPopup,
      timestamp: timestamp,
      teacher: teacher,
      teacherId: teacherId
    });
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

  renderTeacherMonth(teacher, teacherId) {

    var weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month"),
      monthIndex = date.month(),
      count = 0;

    for(let day = 1; day <= this.state.month.daysInMonth(); day++){

      let array = [];
      if(typeof teacher.shifts !== "undefined"){
          for (let [key, value] of Object.entries(teacher.shifts)) {
            array[key] = value;
          }
      }

      weeks.push(<TeachersWeeks
          teacher={teacher}
          teacherId={teacherId}
          shifts={(typeof teacher.shifts !== "undefined" ? array[date.format("MMDDYYYY")] : null)}
          timestamp={date.format("MMDDYYYY")}
          onHeaderClick={this.toggleMenu.bind(this)}
          key={date.format("DDD")}
          dayName={date.format("dd")}
          dateDayYear={date.format("DDD")}
          nowDayYear={moment().format("DDD")}
          dateWeekDay={date.format("d")}
          shiftTypes={this.props.shiftTypes}
         />);

       date.add(1, "d");
    }

    // while (!done) {
      // weeks.push(<TeachersWeeks
      //     teacher={teacher}
      //     teacherId={teacherId}
      //     timestamp={date.format("X")}
      //     onHeaderClick={this.toggleMenu.bind(this)}
      //     key={date.format("DDD")}
      //     dayName={date.format("dd")}
      //     dateDayYear={date.format("DDD")}
      //     nowDayYear={moment().format("DDD")}
      //     dateWeekDay={date.format("d")}
      //    />);
    //   date.add(1, "d");
    //   done = count++ > 2 && monthIndex !== date.month();
    //   monthIndex = date.month();
    // }
    // console.log(weeks);
    return weeks;
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  onSubmit(values) {
    const { selectedOption } = this.state;

    if(selectedOption !== null){
      // TODO: we should be able to embed shift as field form
      values.shiftType = selectedOption.value;
    }

    values.teacher = this.state.teacherId;
    values.timestamp = this.state.timestamp;

    this.setState({
      showPopup: !this.state.showPopup
    });

    this.props.onSubmit(values);
  }

  render() {

    const { handleSubmit, teachers, shiftTypes } = this.props;
    const { selectedOption } = this.state;

    const value = selectedOption && selectedOption.value;

    let shiftTypesOptions = null;

    if(typeof shiftTypes !== "undefined"){
      shiftTypesOptions = _.map(shiftTypes, (shiftType, key) => ({ value: key, label: shiftType.label }) );
    }

    return (
      <div>
        <Popup
          showhide={this.state.showPopup}
          title={"Assign shift to teacher"}
          description={"Choose a shift to be assigned to the teacher"}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          buttonClose={this.toggleMenu.bind(this)}
           >
            {(typeof shiftTypes !== "undefined" ?
                  <Select
                    name="shift"
                    value={value}
                    onChange={this.handleChange}
                    options={shiftTypesOptions}
                  />
            :
            <p>Loading select...</p>)}
        </Popup>
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
                    <th className="align-middle" rowSpan="2">Teachers</th>
                    {this.renderHeaderDayNumber()}
                  </tr>
                  <tr>
                      {this.renderHeaderDayName()}
                  </tr>
                </thead>
                <tbody>

                  {_.map(teachers, (teacher, key) =>
                    <tr key={key}>
                      <th>{teacher.name}</th>
                    {this.renderTeacherMonth(teacher, key)}
                    </tr>
                   )}
                </tbody>
              </table>
            </div>
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
