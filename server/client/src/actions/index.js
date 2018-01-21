import axios from 'axios';
import {
 FETCH_USER, FETCH_STUDENTS, FETCH_STUDENT, NEW_STUDENT, UPDATE_STUDENT
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

export const updateStudent = ( values, history) => async dispatch => {
  const res = await axios.post(`/api/students/${values._id}`, values);

  history.push('/students');
  dispatch({ type: UPDATE_STUDENT , payload: res.data});
}
