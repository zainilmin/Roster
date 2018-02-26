import _ from 'lodash';
import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
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
    <Tabs defaultActiveKey={"7-A"} id="class-tab">
      {
        _.map(grades, (grade) => {
          return (
            <Tab eventKey={grade} title={grade} key={grade}>
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
            </Tab>
          );
        })
      }
    </Tabs>
  );
}
