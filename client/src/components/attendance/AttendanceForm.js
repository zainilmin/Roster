import React, { Component } from 'react';
import { reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col } from 'react-bootstrap';
import AttendanceFormRow from './AttendanceFormRow';

class AttendanceForm extends Component {

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
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <FieldArray
          name="attendance"
          component={AttendanceFormRow} />
        {this.renderButtons(pristine, submitting)}
      </form>
    )
  }
}

export default reduxForm(
  {form: 'AttendanceForm',
   enableReinitialize: true})(AttendanceForm);
