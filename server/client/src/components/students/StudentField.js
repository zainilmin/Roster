import React from 'react';
import { Col } from 'react-bootstrap';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <Col sm={3}><label>{label}</label></Col>
        <input {...input} />
        <div className="text-danger">
          {touched && error}
        </div>
    </div>
  );
};
