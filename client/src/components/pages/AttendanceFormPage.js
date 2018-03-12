import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import { fetchStudents, fetchSchedule, updateSchedule } from '../../actions';
import AttendanceForm from '../attendance/AttendanceForm';

class AttendanceFormPage extends Component {

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id) {
      this.props.fetchSchedule(_id);
      this.props.fetchStudents();
    }
  }

  submit = (schedule) => {
    return this.props.updateSchedule(schedule, this.props.history);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={6}>
            <AttendanceForm
              schedule={this.props.schedule}
              students={this.props.students}
              onSubmit={this.submit}
            />
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
  { fetchStudents, fetchSchedule, updateSchedule })(withRouter(AttendanceFormPage));
