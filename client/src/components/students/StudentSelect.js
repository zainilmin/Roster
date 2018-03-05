import _ from 'lodash';
import React from 'react';
import { Col, Row, ControlLabel } from 'react-bootstrap';

export default ({ input, label, meta: { error, touched }, options }) => {
  return (
    <Row>
      <Col sm={3}><ControlLabel>{label}</ControlLabel></Col>
      <Col sm={5}>
        <select {...input} >
          <option />
          { _.map(options, (item) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            })
          }
        </select>
        <p className="text-danger">
          {touched && error}
        </p>
      </Col>
    </Row>
  );
}