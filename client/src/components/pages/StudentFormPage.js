import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import {
 fetchStudent, saveStudent, newStudent, updateStudent } from '../../actions';
import StudentForm from '../students/StudentForm';

class StudentFormPage extends Component {

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id) {
      this.props.fetchStudent(_id);
    } else {
      this.props.newStudent();
    }
  }

  submit = (student) => {
    if(!student._id) {
      return this.props.saveStudent(student, this.props.history);
    } else {
      return this.props.updateStudent(student, this.props.history);
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={8}>
            <StudentForm student={this.props.student} onSubmit={this.submit} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    student: state.studentStore.student
  }
}

export default connect(
  mapStateToProps,
  { newStudent, saveStudent,
    fetchStudent, updateStudent })(withRouter(StudentFormPage));
