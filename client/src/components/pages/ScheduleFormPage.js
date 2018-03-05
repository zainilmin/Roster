import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import {
  fetchSchedule, newSchedule,
  saveSchedule, updateSchedule } from '../../actions';
import ScheduleForm from '../schedule/ScheduleForm';

class ScheduleFormPage extends Component {

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id) {
      this.props.fetchSchedule(_id);
    } else {
      this.props.newSchedule();
    }
  }

  submit = (schedule) => {
    if(!schedule._id) {
      return this.props.saveSchedule(schedule, this.props.history);
    } else {
      return this.props.updateSchedule(schedule, this.props.history);
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={8}>
            <ScheduleForm
              schedule={this.props.schedule}
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
    schedule: state.scheduleStore.schedule
  }
}

export default connect(
  mapStateToProps,
  { newSchedule, saveSchedule,
    fetchSchedule, updateSchedule })(withRouter(ScheduleFormPage));
