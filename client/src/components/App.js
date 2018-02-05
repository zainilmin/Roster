import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import StudentFormPage from './StudentFormPage';
import ScheduleListPage from './ScheduleListPage';
import ScheduleFormPage from './ScheduleFormPage';

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
            <Route path="/schedules" component={ScheduleListPage} />
            <Route path="/schedule/new" component={ScheduleFormPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
