import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import StudentList from '../students/StudentList.js';
import * as actions from '../../actions';

class StudentListPage extends Component {

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
    const grades = [7, 8, 9, 10, 11, 12];
    const sections =["A", "B", "C"];
    return (
      <div className='container-fluid'>
        <h3>Student List</h3>
        <LinkContainer to="/students/new">
          <Button bsStyle="info" className="pull-right">
            <Glyphicon glyph="plus" />Add Student
          </Button>
        </LinkContainer>
        <StudentList
          students={this.props.students}
          grades={this.getGradeSection(grades, sections)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { students: state.studentStore.students };
}

export default connect(mapStateToProps, actions)(StudentListPage);
