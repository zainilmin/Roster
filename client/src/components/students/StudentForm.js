import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col} from 'react-bootstrap'
import StudentField from './StudentField';
import StudentSelect from './StudentSelect';
import formFields from './formFields';
import formSelects from './formSelects';

class StudentForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { student } = nextProps;
    if(student._id !== this.props.student._id) {
      this.props.initialize(student);
    }
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <FormGroup key={name}>
          <Field
            key={name}
            component={StudentField}
            type="text"
            label={label}
            name={name} />
        </FormGroup>
      );
    });
  }

  renderSelects() {
    return _.map(formSelects, ({ label, name, options }) => {
      return (
        <FormGroup key={name}>
          <Field
           name={name}
           key={name}
           component={StudentSelect}
           options={options}
           label={label} />
        </FormGroup>
      );
    });
  }

  renderButtons(pristine, submitting) {
    return (
      <FormGroup>
        <Col sm={3} />
        <Col>
          <Button
            type='submit'
            disabled={pristine || submitting}
            className='btn btn-primary'>Save</Button>
          <Link to="/students" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, student } = this.props;
    return (
      <div className='container-fluid'>
        <h3>{student._id ? 'Edit Student' : 'Add New Student'}</h3>
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          {this.renderSelects()}
          {this.renderButtons(pristine, submitting)}
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, emptyValueError }) => {
    if(!values[name]) {
      errors[name] = emptyValueError;
    }
  });

  _.each(formSelects, ({ name, emptyValueError }) => {
    if(!values[name]) {
      errors[name] = emptyValueError;
    }
    });

  if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values["phone"])) {
    errors['phone'] = 'Phone number must be in International format';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values['email'])) {
    errors['email'] = 'Invalid email address';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'studentForm',
  destroyOnUnmount: false
})(StudentForm);