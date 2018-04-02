import _ from 'lodash';
import React from 'react';
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

export default function AttendanceFormRow({ students }) {
  return _.map(students, student => {
    return (
      <Row key={student.student_id}>
        <FormGroup key={student.student_id}>
          <Col sm={3}>{student.firstname} {student.lastname}</Col>
          <Col sm={3}>
            <select name="status" className='form-control' >
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
            <select name="reason" className='form-control' >
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
            <input name="comments" className='form-control' />
          </Col>
        </FormGroup>
      </Row>
    )
  })
}