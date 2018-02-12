import React from 'react';
import { Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default ({ input, label, dateFormat, meta: { error, touched } }) => {
  return (
    <div>
      <Col sm={3}><label>{label}</label></Col>
      <DatePicker {...input}
        dateFormat={dateFormat}
        selected={input.value ? moment(input.value, dateFormat) : moment()} />
      <p className="text-danger">
        {touched && error}
      </p>
    </div>
  );
}
