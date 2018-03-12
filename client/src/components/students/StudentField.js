import React from 'react';
import { Col, Row, ControlLabel } from 'react-bootstrap';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <Row>
      <Col sm={3}><ControlLabel>{label}</ControlLabel></Col>
      <Col sm={3}>
        <input {...input} className='form-control' />
        <p className="text-danger">
          {touched && error}
        </p>
      </Col>
    </Row>
  );
}
