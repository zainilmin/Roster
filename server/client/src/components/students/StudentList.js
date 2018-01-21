import _ from 'lodash';
import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import StudentItem from './StudentItem';

export default function StudentList({students, grades}) {

  const studentList = (grade) => {
    return students.filter((item) => item.grade === grade).map(student => {
      return (
        <StudentItem key={student._id} student={student} />
      )
    });
  }

  return (
    <Tabs defaultActiveKey={7} id="class-tab">
      {
        _.map(grades, (grade) => {
          return (
            <Tab eventKey={grade} title={grade} key={grade}>
              <Table condensed hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Section</th>
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
