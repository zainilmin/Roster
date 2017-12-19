import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Panel } from 'react-bootstrap';
import StudentForm from './StudentForm';
import StudentFormReview from './StudentFormReview';

class StudentNew extends Component {
  state = { showFormReview: false};

  renderContent() {
    if(this.state.showFormReview){
      return (
        <StudentFormReview
          onCancel={() => this.setState({ showFormReview: false })} />
      );
    }
    return (
      <StudentForm
        onStudentSubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return (
      <div className='container-fluid'>
        <Panel header="Add Student">
          {this.renderContent()}
        </Panel>
      </div>
    );
  }
}

export default reduxForm({
  form: 'studentForm'
})(StudentNew);
