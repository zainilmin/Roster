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

  render() {
    const grades = [7, 8, 9, 10, 11, 12];
    return (
      <div className='container-fluid'>
        <h3>Student List</h3>
        <LinkContainer to="/students/new">
          <Button bsStyle="info" className="pull-right">
            <Glyphicon glyph="plus" />Add Student
          </Button>
        </LinkContainer>
        <StudentList students={this.props.students} grades={grades} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { students: state.studentStore.students };
}

export default connect(mapStateToProps, actions)(StudentListPage);
