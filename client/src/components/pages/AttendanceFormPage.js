import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Grid, Panel } from 'react-bootstrap';
import { fetchStudentsByClass, fetchSchedule } from '../../actions';
import AttendanceForm from '../attendance/AttendanceForm';
import moment from 'moment';

class AttendanceFormPage extends Component {

  componentDidMount = () => {
    const { _id, grade, section } = this.props.match.params;
    if(_id) {
      this.props.fetchSchedule(_id);
      this.props.fetchStudentsByClass(grade, section);
    }
  }

  submit = (student) => {
    console.log(student);
    //return this.props.updateSchedule(schedule, this.props.history);
  }

  render() {
    const { schedule } = this.props;
    return (
      <Grid fluid>
        <Row>
          <Col sm={6}>
            <Panel header="Add Attendance">
              <table className='table'>
                <thead>
                  <tr id="head">
                    <th>Class Date</th>
                    <th>Timing</th>
                    <th>Academic Year</th>
                    <th>Grade</th>
                    <th>Section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{moment(schedule.class_date).format("MM/DD/YYYY")}</td>
                    <td>{schedule.class_time}</td>
                    <td>{schedule.academic_year}</td>
                    <td>{schedule.grade}</td>
                    <td>{schedule.section}</td>
                  </tr>
                </tbody>
              </table>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Status</th>
                    <th>Reason</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody />
              </table>
              <AttendanceForm
                students={this.props.students}
                onSubmit={this.submit}
              />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.scheduleStore.schedule,
    students: state.studentStore.students
  }
}

export default connect(
  mapStateToProps,
  { fetchStudentsByClass, fetchSchedule })(withRouter(AttendanceFormPage));
