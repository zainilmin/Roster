import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Panel } from 'react-bootstrap';
import moment from 'moment';

class AttendanceForm extends Component {

  sortList(a, b) {
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
  }

  studentItem(student) {
    return (
      <tr key={student._id}>
        <td>{student.firstname} {student.lastname}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  renderStudents(students, grade, section) {
     return students.filter(
         (item) => item.grade === grade
          && item.section === section).sort(this.sortList).map(this.studentItem);
  }

  render() {
    const { schedule } = this.props;
    const { students } = this.props;
    return (
      <Panel header="Add Attendance">
        <table className='table'>
          <thead>
            <tr id="head">
              <th>Class Date</th>
              <th>Timing</th>
              <th>Academic Year</th>
              <th>Grade</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{moment(schedule.class_date).format("MM/DD/YYYY")}</td>
              <td>{schedule.class_time}</td>
              <td>{schedule.academic_year}</td>
              <td>{schedule.grade}</td>
              <td>{schedule.section}</td>
            </tr>
          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStudents(students, schedule.grade, schedule.section)}
          </tbody>
        </table>
      </Panel>
    )
  }
}

export default reduxForm({
  form: 'AttendanceForm'
})(AttendanceForm);
