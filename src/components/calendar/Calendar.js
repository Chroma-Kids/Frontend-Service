import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './calendar.css';

const theme = {
  accentColor: '#2F404F',
  floatingNav: {
    background: 'rgba(57, 75, 89, 0.94)',
    chevron: '#19B393',
    color: '#FFF',
  },
  headerColor: '#2F404F',
  selectionColor: '#19B393',
  textColor: {
    active: '#FFF',
    default: '#666A6B',
  },
  todayColor: '#2F404F',
  weekdayColor: '#384B5A',
};

export default class Calendar extends React.Component {

  render() {
    return (
      <div className="calendar">
        <InfiniteCalendar theme={theme} height={300} width={410}/>
      </div>
    );
  }

}