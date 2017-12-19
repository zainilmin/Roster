import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { fetchStudents } from '../../actions';

class StudentList extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  renderItem = (item, i) => {
    return (
      <tr key={i}>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.grade}</td>
        <td>{item.section}</td>
      </tr>
    );
  }

  render () {
    const grades = [7, 8, 9, 10, 11, 12];
    const studentList = this.props.students;
    return (
      <Tabs defaultActiveKey={7} id="class-tab">
        {
          _.map(grades, (grade) => {
            return (
              <Tab eventKey={grade} title={grade} key={grade}>
                <Table striped condensed hover>
                  <tbody>
                  {
                    studentList.filter(
                      (item) => item.grade === grade).map(this.renderItem)
                  }
                  </tbody>
                </Table>
              </Tab>
            );
          })
        }
      </Tabs>
    );
  }
}

function mapStateToProps({ students }) {
  return { students };
}

export default connect(mapStateToProps, { fetchStudents })(StudentList);
