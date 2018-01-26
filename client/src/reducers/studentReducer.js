import {
  FETCH_STUDENTS, FETCH_STUDENT, NEW_STUDENT, UPDATE_STUDENT
  } from '../actions/types'

const defaultState = {
  students: [],
  student: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        students: action.payload
      }
    case FETCH_STUDENT:
      return {
        ...state,
        student: action.payload
      }
    case NEW_STUDENT:
      return {
        ...state,
        student: {}
      }
    case UPDATE_STUDENT:
      const student = action.payload;
      return {
        ...state,
        students: state.students.map(item => item._id === student._id ? student : item)
      }
    default:
      return state;
  }
}