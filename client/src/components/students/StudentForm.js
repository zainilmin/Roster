import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col, Panel, Row } from 'react-bootstrap';
import StudentField from './StudentField';
import StudentSelect from './StudentSelect';
import SelectDatePicker from '../schedule/SelectDatePicker';
import formFields from './formFields';
import formSelects from './formSelects';
import formFieldsInfo from './formFieldsInfo';

class StudentForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { student } = nextProps;
    if(student._id !== this.props.student._id) {
      student.birth_date = moment(student.birth_date).format("MM-DD-YYYY");
      this.props.initialize(student);
    }
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <FormGroup className="col-md-6" key={name}>
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

  renderFieldsInfo() {
    return _.map(formFieldsInfo, ({ label, name }) => {
      return (
        <FormGroup className="col-md-6" key={name}>
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
        <FormGroup className="col-md-3" key={name}>
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
        <Col sm={5}>
          <Button
            type='submit'
            disabled={pristine || submitting}
            className='btn btn-primary'>Save</Button>
          <Link to="/students" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
  }

  renderDatePicker() {
    return (
      <FormGroup>
        <Field
          key="birth_date"
          component={SelectDatePicker}
          label="Date of Birth"
          name="birth_date"
          dateFormat="MM-DD-YYYY"
        />
      </FormGroup>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, student } = this.props;
    return (
      <Panel header={student._id ? 'Edit Student' : 'Add Student'}>
        <form onSubmit={handleSubmit}>
            <Row className="form-row">{this.renderFields()}</Row>
            <Row className="form-row">{this.renderFieldsInfo()}</Row>
            <Row className="form-row">
              {this.renderSelects()}
              {this.renderDatePicker()}
            </Row>
            <Row className="form-row">
              {this.renderButtons(pristine, submitting)}
            </Row>
        </form>
      </Panel>
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

  _.each(formSelects, ({ name, emptyValueError, label }) => {
    if(!values[name]) {
      errors[name] = emptyValueError;
    }
    if(values[name] === "Select " + label ) {
      errors[name] = emptyValueError;
    }
    });

  if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values["phone"])) {
    errors['phone'] = 'Phone number must be in 000-000-0000 format';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values['email'])) {
    errors['email'] = 'Invalid email address';
  }

  if(!values["birth_date"]) {
    errors["birth_date"] = "Please enter birth date";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'studentForm',
  destroyOnUnmount: false
})(StudentForm);