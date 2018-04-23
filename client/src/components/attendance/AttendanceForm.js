import React from 'react';
import { reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col } from 'react-bootstrap';
import AttendanceFormRow from './AttendanceFormRow';

const renderAttendance = ({ fields }) => (
  <div>
  {
    fields.map((student, index) => {
      const value = fields.get(index);
      return (
        <AttendanceFormRow
          name={ student }
          value={ value }
          index={ index }
          key={ index }/>
      )
    })
  }
  </div>
)

const AttendanceForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={ handleSubmit }>
    <FieldArray
      name="attendance"
      component={renderAttendance} />
    <FormGroup>
    <Col sm={3} />
    <Col sm={4}>
      <Button
        type='submit'
        className='btn btn-primary'>Save</Button>
      <Link to="/attendance" className='btn btn-link'>Cancel</Link>
    </Col>
  </FormGroup>
  </form>
);

export default reduxForm(
  {form: 'AttendanceForm',
   enableReinitialize: true})(AttendanceForm);
