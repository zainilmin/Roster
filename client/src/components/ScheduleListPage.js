import React, { Component } from 'react';
import ScheduleList from './schedule/ScheduleList';

class ScheduleListPage extends Component {

  render() {
    const grades = [7, 8, 9, 10, 11, 12];
    return (
      <div className='container-fluid'>
        <h3>Class Schedule</h3>
        <ScheduleList grades={grades} />
      </div>
    )
  }
}

export default ScheduleListPage;
