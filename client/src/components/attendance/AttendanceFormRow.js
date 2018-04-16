import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, Col, Row } from 'react-bootstrap';
const statusSelects = ['P', 'A', 'T'];
const reasonSelects = [
                        { name: 'Extracurricular Education', value: 'EE'},
                        { name: 'Extracurricular Sports', value: 'ES' },
                        { name: 'Health', value: 'H' },
                        { name: 'Personal', value: 'PR'},
                        { name: 'Travelling', value: 'TR'},
                        { name: 'Transportation', value: 'TRA'},
                        { name: 'Other', value: 'O'}
                      ];

export default function AttendanceFormRow({ fields }) {
  return fields.getAll().map((student, idx) => {
    const student_value = fields.get(idx);
    return (
      <Row key={student_value.student_id}>
        <FormGroup key={student_value.student_id}>
          <Col sm={3}>{student_value.firstname} {student_value.lastname}</Col>
          <Col sm={3}>
            <select name={ student_value.status }
              className='form-control'>
              <option />
              { _.map(statusSelects, (item) => {
                  return (
                    <option key={item} value={item}>{item}</option>
                  );
                })
              }
            </select>
          </Col>
          <Col sm={3}>
            <select name={ student_value.reason }
              className='form-control'>
              <option />
              { _.map(reasonSelects, ({value, name}) => {
                  return (
                    <option key={value} value={value}>{name}</option>
                  );
                })
              }
            </select>
          </Col>
          <Col sm={3}>
            <Field key={student_value.student_id}
              name={ student_value.comments }
              component="input" />
          </Col>
        </FormGroup>
      </Row>
    )
  })
}