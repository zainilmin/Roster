import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ScheduleList from '../schedule/ScheduleList';
import * as actions from '../../actions';

class ScheduleListPage extends Component {

  componentDidMount() {
    this.props.fetchSchedules();
  }

  getGradeSection(grades, sections) {
    const arr = [];
    _.each(grades, function(grade) {
      _.each(sections, function(section) {
        arr.push(grade + '-' + section);
      })
    })
    return arr;
  }

  render() {
    const grades = [7, 8, 9, 10, 11, 12];
    const sections =["A", "B", "C"];
    return (
      <div className='container-fluid'>
        <h3>Class Schedule</h3>
        <LinkContainer to="/schedules/new">
          <Button bsStyle="info" className="pull-right">
            <Glyphicon glyph="plus" />Add Schedule
          </Button>
        </LinkContainer>
        <ScheduleList
          schedules={this.props.schedules}
          grades={this.getGradeSection(grades, sections)}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { schedules: state.scheduleStore.schedules };
}

export default connect(mapStateToProps, actions)(ScheduleListPage);
