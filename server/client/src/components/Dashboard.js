import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import StudentList from './students/StudentList';

class Dashboard extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Panel header="Student Management">
          <StudentList />
        </Panel>
      </div>
    );
  }
}

export default Dashboard;
