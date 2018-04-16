import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import studentReducer from './studentReducer';
import scheduleReducer from './scheduleReducer';
import attendanceReducer from './attendanceReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  studentStore: studentReducer,
  scheduleStore: scheduleReducer,
  attendanceStore: attendanceReducer
});
