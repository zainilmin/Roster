import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, ButtonToolbar, FormGroup} from 'react-bootstrap';
import formFields from './formFields';
import formSelects from './formSelects';
import * as actions from '../../actions/';

const StudentFormReview = (
  { onCancel, formValues, submitStudent, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
      return (
        <FormGroup key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </FormGroup>
      );
    });

  const reviewSelects = _.map(formSelects, ({ name, label }) => {
    return (
      <FormGroup key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </FormGroup>
    );
  });

  return (
    <div>
      <FormGroup>
        <label>Please review Student Information</label>
      </FormGroup>
      {reviewFields}
      {reviewSelects}
      <ButtonToolbar>
        <Button className='btn btn-info' onClick={onCancel}>Back</Button>
        <Button
          className='btn btn-primary'
          onClick={() => submitStudent(formValues, history)}>Save</Button>
      </ButtonToolbar>
     </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.studentForm.values };
}

export default connect(
  mapStateToProps, actions)(withRouter(StudentFormReview));
