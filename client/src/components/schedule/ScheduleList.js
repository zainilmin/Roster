import _ from 'lodash';
import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import ScheduleItem from './ScheduleItem';

export default function ScheduleList({ schedules, grades }) {

  const sortList = (a, b) => {
    if (a.class_date > b.class_date) return 1;
    if (a.class_date < b.class_date) return -1;
    return 0;
  }
  const scheduleList = (grade) => {
    const split_grade = grade.split('-');
    return schedules.filter(
      (item) => item.grade === Number(split_grade[0])
      && item.section === split_grade[1]).sort(sortList).map(
        schedule => {
          return (
           <ScheduleItem key={schedule._id} schedule={schedule} />
          )
      });
  }

  return (
    <Tabs defaultActiveKey={"7-A"} id="schedule-tab">
    {
      _.map(grades, (grade) => {
        return (
          <Tab eventKey={grade} title={grade} key={grade}>
            <Table condensed hover>
              <thead>
                <tr>
                  <th>Class Date</th>
                  <th>Academic Year</th>
                </tr>
              </thead>
              <tbody>
                {scheduleList(grade)}
              </tbody>
            </Table>
          </Tab>
        )
      })
    }
    </Tabs>
  );
}
