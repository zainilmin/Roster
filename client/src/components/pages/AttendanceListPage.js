import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttendanceList from '../attendance/AttendanceList';
import * as actions from '../../actions';

class AttendanceListPage extends Component {

  componentDidMount() {
    this.props.fetchSchedules();
  }

  render() {
    const grades = [7, 8, 9, 10, 11, 12];
    return (
      <div className='container-fluid'>
        <h3>Attendance</h3>
        <AttendanceList schedules={this.props.schedules} grades={grades} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { schedules: state.scheduleStore.schedules };
}

export default connect(mapStateToProps, actions)(AttendanceListPage);
