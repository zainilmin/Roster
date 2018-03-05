import _ from 'lodash';
import React from 'react';
import { Tab, Table, Row, Col, Nav, NavItem } from 'react-bootstrap';
import StudentItem from './StudentItem';

export default function StudentList({ students, grades }) {

  const sortList = (a, b) => {
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
  }

  const studentItem = (student) => {
    return (
      <StudentItem key={student._id} student={student} />
    );
  }

  const studentList = (grade) => {
    const split_grade = grade.split('-');
    return students.filter(
     (item) => item.grade === Number(split_grade[0])
      && item.section === split_grade[1]).sort(sortList).map(studentItem);
  }

  return (
    <Tab.Container defaultActiveKey={"7-A"} id="class-tab">
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
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentList(grade)}
                      </tbody>
                   </Table>
                  </Tab.Pane>
                );
              })
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
