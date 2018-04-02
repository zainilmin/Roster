import axios from 'axios';
import {
 FETCH_USER, FETCH_STUDENTS, FETCH_STUDENT, NEW_STUDENT, UPDATE_STUDENT,
 FETCH_SCHEDULES, FETCH_SCHEDULE, NEW_SCHEDULE, UPDATE_SCHEDULE
 } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveStudent = (values, history) => async dispatch => {
  const res = await axios.post('/api/students', values);

  history.push('/students');
  dispatch ({ type: FETCH_USER, payload: res.data });
}

export const fetchStudents = () => async dispatch => {
  const res = await axios.get('/api/students');

  dispatch({ type: FETCH_STUDENTS, payload: res.data });
}

export const fetchStudent = (id) => async dispatch => {
  const res = await axios.get(`/api/students/${id}`);

  dispatch({ type: FETCH_STUDENT, payload: res.data });
}

export const newStudent = () => async dispatch => {
  dispatch({ type: NEW_STUDENT });
}

export const updateStudent = (values, history) => async dispatch => {
  const res = await axios.post(`/api/students/${values._id}`, values);

  history.push('/students');
  dispatch({ type: UPDATE_STUDENT , payload: res.data});
}

export const fetchStudentsByClass = (grade, section) => async dispatch => {
  const res = await axios.get(`/api/students/${grade}/${section}`);

  dispatch({ type:FETCH_STUDENTS, payload: res.data });
}

export const saveSchedule = (values, history) => async dispatch => {
  const res = await axios.post('/api/schedules', values);

  history.push('/schedules');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchSchedules = () => async dispatch => {
  const res = await axios.get('/api/schedules');

  dispatch({ type: FETCH_SCHEDULES, payload: res.data });
}

export const fetchSchedule = (id) => async dispatch => {
  const res = await axios.get(`/api/schedules/${id}`);

  dispatch({ type: FETCH_SCHEDULE, payload: res.data });
}

export const newSchedule = () => async dispatch => {
  dispatch({ type: NEW_SCHEDULE });
}

export const updateSchedule = (values, history) => async dispatch => {
  const res = await axios.post(`/api/schedules/${values._id}`, values);

  history.push('/schedules');
  dispatch({ type: UPDATE_SCHEDULE , payload: res.data});
}
