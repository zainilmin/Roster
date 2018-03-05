import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon, Panel, Row, Col, Grid, Table, ControlLabel
 } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ScheduleList from '../schedule/ScheduleList';
import * as actions from '../../actions';
import studentSelect from '../students/formSelects';
import scheduleSelect from '../schedule/formSelects';

class ScheduleListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grades: studentSelect[0]["options"],
      sections: studentSelect[1]["options"],
      academic_year: scheduleSelect[1],
      academic_year_value: scheduleSelect[1]["options"][0]
    };
  }

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

  onAcademicYearChange = (e) => {
    this.setState({academic_year_value: e.target.value});
  }

  academicYearDropDown() {
    return (
      <Table>
        <tbody>
          <tr>
            <td>
              <ControlLabel>{this.state.academic_year["label"]}</ControlLabel>
            </td>
          </tr>
          <tr>
            <td>
              <select
                name={this.state.academic_year["name"]}
                defaultValue={this.state.academic_year_value}
                onChange={this.onAcademicYearChange}>
                { _.map(this.state.academic_year["options"], (item) => {
                    return (
                      <option key={item} value={item}>{item}</option>
                    );
                  })
                }
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <LinkContainer to="/schedules/new">
              <Button bsStyle="primary" className="pull-right">
                <Glyphicon glyph="plus" />Add Schedule
              </Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Panel header="Class Schedule">
              {this.academicYearDropDown()}
              <ScheduleList
                schedules={this.props.schedules}
                grades={this.getGradeSection(
                  this.state.grades, this.state.sections)}
                academic_year={this.state.academic_year_value}
              />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { schedules: state.scheduleStore.schedules };
}

export default connect(mapStateToProps, actions)(ScheduleListPage);
