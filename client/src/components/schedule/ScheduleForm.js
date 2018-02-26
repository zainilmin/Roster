import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col } from 'react-bootstrap';
import StudentSelect from '../students/StudentSelect';
import formSelects from '../students/formSelects';
import scheduleSelect from './formSelects';
import SelectDatePicker from './SelectDatePicker';
import moment from 'moment';

class ScheduleForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { schedule } = nextProps;
    if(schedule._id !== this.props.schedule._id) {
      schedule.class_date = moment(schedule.class_date).format("MM/DD/YYYY");
      this.props.initialize(schedule);
    }
  }

  renderDatePicker() {
    return (
      <FormGroup>
        <Field
          key="class_date"
          component={SelectDatePicker}
          label="Class Date"
          name="class_date"
          dateFormat="MM/DD/YYYY"
        />
      </FormGroup>
    );
  }

  renderSelects() {
    const selectList = [...scheduleSelect, ...formSelects];
    return _.map(selectList, ({ label, name, options }) => {
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
          <Link to="/schedule" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
    }

  render() {
   const { handleSubmit, pristine, submitting, schedule } = this.props;
    return (
      <div className='container-fluid'>
        <h3>{schedule._id ? 'Edit Class' : 'Add Class'}</h3>
        <form onSubmit={handleSubmit}>
          {this.renderDatePicker()}
          {this.renderSelects()}
          {this.renderButtons(pristine, submitting)}
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  const selectList = [...scheduleSelect, ...formSelects];

  _.each(selectList, ({ name, emptyValueError }) => {
   if(!values[name]) {
     errors[name] = emptyValueError;
   }
  });

  if(!values["class_date"]) {
    errors["class_date"] = "Please pick a date";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'scheduleForm',
  destroyOnUnmount: false
})(ScheduleForm);
