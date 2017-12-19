import _ from 'lodash';
import React from 'react';
import { Col } from 'react-bootstrap';

export default ({ input, label, meta: { error, touched }, options }) => {
  return (
    <div>
      <Col sm={3}><label>{label}</label></Col>
      <select {...input} >
        <option />
        { _.map(options, (item) => {
            return (
              <option key={item} value={item}>{item}</option>
            );
          })
        }
      </select>
      <div className="text-danger">
        {touched && error}
      </div>
    </div>
  );
};