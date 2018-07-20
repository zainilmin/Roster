import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon, Panel, Row, Col, Grid } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import StudentList from '../students/StudentList.js';
import studentSelect from '../students/formSelects';
import * as actions from '../../actions';

class StudentListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grades: studentSelect[0]["options"],
      sections: studentSelect[1]["options"]
    };
  }

  componentDidMount() {
    this.props.fetchStudents();
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
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Panel header="Student List">
              <LinkContainer to="/students/new">
                <Button bsStyle="primary" className="pull-right">
                  <Glyphicon glyph="plus" />Add Student
                </Button>
              </LinkContainer>
              <StudentList
                students={this.props.students}
                grades={this.getGradeSection(
                  this.state.grades, this.state.sections)}
              />
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { students: state.studentStore.students };
}

export default connect(mapStateToProps, actions)(StudentListPage);
