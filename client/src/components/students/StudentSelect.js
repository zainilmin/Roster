import _ from 'lodash';
import React from 'react';
import { Col, Row, ControlLabel } from 'react-bootstrap';

export default ({ input, label, meta: { error, touched }, options }) => {
  return (
    <Row>
      <Col sm={3}><ControlLabel>{label}</ControlLabel></Col>
      <Col sm={3}>
        <select {...input} className='form-control' >
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