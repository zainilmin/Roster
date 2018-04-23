import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Col, Row } from 'react-bootstrap';
import AttendanceSelect from './AttendanceSelect';
const statusSelects = [
                        { name: 'Present', value: 'P'},
                        { name: 'Absent', value: 'A'},
                        { name: 'Tardy', value: 'T'}
                        ];
const reasonSelects = [
                        { name: 'Extracurricular Education', value: 'EE'},
                        { name: 'Extracurricular Sports', value: 'ES' },
                        { name: 'Health', value: 'H' },
                        { name: 'Personal', value: 'PR'},
                        { name: 'Travelling', value: 'TR'},
                        { name: 'Transportation', value: 'TRA'},
                        { name: 'Other', value: 'O'}
                      ];

class AttendanceFormRow extends Component {

  render() {
    const { name, value, index } = this.props;
    return (
      <Row key={index} className="form-group">
        <Col sm={3}>{ value.firstname } { value.lastname }</Col>
        <Col sm={3}>
          <Field
            name={`${name}.status`}
            component={AttendanceSelect}
            options={statusSelects}/>
        </Col>
        <Col sm={3}>
          <Field
            name={`${name}.reason`}
            component={AttendanceSelect}
            options={reasonSelects}
          />
        </Col>
        <Col sm={3}>
          <Field
            name={`${name}.comments`}
            component="input"
            className='form-control' />
        </Col>
      </Row>
    )
  }
}

export default AttendanceFormRow;
