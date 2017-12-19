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
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <FormGroup key={name}>
          <Field
            key={name}
            component={StudentField}
            type="text"
            label={label}
            name={name}/>
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

  renderButtons() {
    return (
      <FormGroup>
        <Col sm={3} />
        <Col>
          <Button type='submit' className='btn btn-primary'>Next</Button>
          <Link to="/students" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
  }

  render() {
    return (
      <div className='container-fluid'>
        <form onSubmit={this.props.handleSubmit(this.props.onStudentSubmit)}>
          {this.renderFields()}
          {this.renderSelects()}
          {this.renderButtons()}
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

  return errors;
}

export default reduxForm({
  validate,
  form: 'studentForm',
  destroyOnUnmount: false
})(StudentForm);
