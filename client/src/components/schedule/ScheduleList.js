import _ from 'lodash';
import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';

export default function ScheduleList({grades}) {

  return (
    <Tabs defaultActiveKey={7} id="schedule-tab">
    {
      _.map(grades, (grade) => {
        return (
          <Tab eventKey={grade} title={grade} key={grade}>
            <Table>
              <tbody>
                <tr></tr>
              </tbody>
            </Table>
          </Tab>
        )
      })
    }
    </Tabs>
  );
}