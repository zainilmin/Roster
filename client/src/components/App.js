import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Schedules from './Schedules';
import Attendance from './Attendance';
import StudentFormPage from './pages/StudentFormPage';
import ScheduleFormPage from './pages/ScheduleFormPage';
import AttendanceFormPage from './pages/AttendanceFormPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/students" component={Dashboard} />
            <Route path="/students/new" component={StudentFormPage} />
            <Route path="/students/edit/:_id" component={StudentFormPage} />
            <Route exact path="/schedules" component={Schedules} />
            <Route path="/schedules/new" component={ScheduleFormPage} />
            <Route path="/schedules/edit/:_id" component={ScheduleFormPage} />
            <Route exact path="/attendance" component={Attendance} />
            <Route path="/attendance/edit/:_id"
              component={AttendanceFormPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
