import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Col, Panel, Row } from 'react-bootstrap';
import StudentSelect from '../students/StudentSelect';
import scheduleSelect from './formSelects';
import SelectDatePicker from './SelectDatePicker';

class ScheduleForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { schedule } = nextProps;
    if(schedule._id !== this.props.schedule._id) {
      schedule.class_date = moment(schedule.class_date).format("MM-DD-YYYY");
      this.props.initialize(schedule);
    }
  }

  renderDatePicker() {
    return (
      <FormGroup className="col-md-12">
        <Field
          key="class_date"
          component={SelectDatePicker}
          label="Class Date"
          name="class_date"
          dateFormat="MM-DD-YYYY"
        />
      </FormGroup>
    );
  }

  renderSelects() {
    return _.map(scheduleSelect, ({ label, name, options }) => {
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
        <Col sm={4}>
          <Button
            type='submit'
            disabled={pristine || submitting}
            className='btn btn-primary'>Save</Button>
          <Link to="/schedules" className='btn btn-link'>Cancel</Link>
        </Col>
      </FormGroup>
    );
  }

  render() {
   const { handleSubmit, pristine, submitting, schedule } = this.props;
    return (
      <Panel header={schedule._id ? 'Edit Schedule' : 'Add Schedule'}>
        <form onSubmit={handleSubmit}>
          <Row className="form-row">{this.renderDatePicker()}</Row>
          <Row className="form-row">{this.renderSelects()}</Row>
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

  _.each(scheduleSelect, ({ name, emptyValueError }) => {
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
