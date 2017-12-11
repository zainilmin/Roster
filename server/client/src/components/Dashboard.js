import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class Dashboard extends Component {

  render() {

    const grades = [7, 8, 9, 10, 11, 12];
    return (
      <div class='container-fluid'>
        <h2>Attendance management</h2>
        <Tabs defaultActiveKey={7} id="class-tab">
          {
            grades.map((grade) =>
              <Tab eventKey={grade} title={grade} key={grade}>
                grade { grade }
                <table>
                  <tbody>
                  </tbody>
                </table>
              </Tab>
            )
          }
        </Tabs>
      </div>
    );
  }
}

export default Dashboard;
