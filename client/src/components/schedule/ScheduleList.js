import _ from 'lodash';
import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import ScheduleItem from './ScheduleItem';

export default function ScheduleList({ schedules, grades }) {

  const scheduleList = (grade) => {
    return schedules.filter((item) => item.grade === grade).map(schedule => {
      return (
        <ScheduleItem key={schedule._id} schedule={schedule} />
      )
    });
  }

  return (
    <Tabs defaultActiveKey={7} id="schedule-tab">
    {
      _.map(grades, (grade) => {
        return (
          <Tab eventKey={grade} title={grade} key={grade}>
            <Table condensed hover>
              <thead>
                <tr>
                  <th>Class Date</th>
                  <th>Academic Year</th>
                  <th>Section</th>
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