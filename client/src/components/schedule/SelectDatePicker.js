import React from 'react';
import { Col, Row, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default ({ input, label, dateFormat, meta: { error, touched } }) => {
  return (
    <Row>
      <Col sm={3}><ControlLabel>{label}</ControlLabel></Col>
      <Col sm={3}>
        <DatePicker {...input}
          dateFormat={dateFormat}
          selected={input.value ? moment(input.value, dateFormat) : null}
          className='form-control'
          />
        <p className="text-danger">
          {touched && error}
        </p>
      </Col>
    </Row>
  );
}
