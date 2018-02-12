import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ScheduleList from './schedule/ScheduleList';
import * as actions from '../actions';

class ScheduleListPage extends Component {

  componentDidMount() {
    this.props.fetchSchedules();
  }

  render() {
    const grades = [7, 8, 9, 10, 11, 12];
    return (
      <div className='container-fluid'>
        <h3>Class Schedule</h3>
        <LinkContainer to="/schedules/new">
          <Button bsStyle="info" className="pull-right">
            <Glyphicon glyph="plus" />Add Schedule
          </Button>
        </LinkContainer>
        <ScheduleList schedules={this.props.schedules} grades={grades} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { schedules: state.scheduleStore.schedules };
}

export default connect(mapStateToProps, actions)(ScheduleListPage);
