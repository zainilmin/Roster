import React, { Component } from 'react';
import { Grid, Panel, Row, Col } from 'react-bootstrap';

class Landing extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Panel header="Austin Secondary RE">
              <p>Features</p>
              <ul>
                <li>
                  Student Registration
                </li>
                <li>
                  Shift Schedules
                </li>
                <li>
                  Attendance Management
                </li>
              </ul>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Landing;
