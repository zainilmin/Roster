import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col } from 'react-bootstrap';
import AttendanceFormRow from './AttendanceFormRow';

class AttendanceForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { students } = nextProps;
    this.props.initialize(students);
  }

  renderButtons(pristine, submitting) {
    return (
      <FormGroup>
        <Col sm={3} />
        <Col sm={4}>
          <Button
            type='submit'
            className='btn btn-primary'>Save</Button>
          <Link to="/attendance" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, students } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <AttendanceFormRow key="attendance" students={students} />
        {this.renderButtons(pristine, submitting)}
      </form>
    )
  }
}

export default reduxForm({
  form: 'AttendanceForm'
})(AttendanceForm);
