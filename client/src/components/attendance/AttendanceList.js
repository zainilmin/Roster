import _ from 'lodash';
import React from 'react';
import { Tab, Table, Row, Col, Nav, NavItem } from 'react-bootstrap';
import AttendanceItem from './AttendanceItem';

export default function AttendanceList({ schedules, grades, academic_year }) {

  const sortList = (a, b) => {
    if (a.class_date > b.class_date) return 1;
    if (a.class_date < b.class_date) return -1;
    return 0;
  }

  const scheduleList = (grade, academic_year) => {
    const split_grade = grade.split('-');
    return schedules.filter(
      (item) => item.grade === Number(split_grade[0])
      && item.section === split_grade[1]
      && item.academic_year === academic_year).sort(sortList).map(
        schedule => {
          return (
           <AttendanceItem key={schedule._id} schedule={schedule} />
          )
      });
  }

  return (
    <Tab.Container defaultActiveKey={"7-A"} id="schedule-tab">
      <Row>
        <Col sm={1}>
          <Nav bsStyle="pills" stacked>
            {
              _.map(grades, (grade) => {
                return (
                  <NavItem eventKey={grade} key={grade}>{grade}</NavItem>
                );
              })
            }
          </Nav>
        </Col>
        <Col sm={11}>
          <Tab.Content animation>
            {
              _.map(grades, (grade) => {
                return (
                  <Tab.Pane eventKey={grade} key={grade}>
                    <Table condensed hover>
                      <thead>
                        <tr>
                          <th>Class Date</th>
                          <th>Class Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleList(grade, academic_year)}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                )
              })
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}