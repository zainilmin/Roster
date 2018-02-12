import {
  FETCH_SCHEDULES, FETCH_SCHEDULE, NEW_SCHEDULE, UPDATE_SCHEDULE
  } from '../actions/types'

const defaultState = {
  schedules: [],
  schedule: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return {
        ...state,
        schedules: action.payload
      }
    case FETCH_SCHEDULE:
      return {
        ...state,
        schedule: action.payload
      }
    case NEW_SCHEDULE:
      return {
        ...state,
        schedule: {}
      }
    case UPDATE_SCHEDULE:
      const schedule = action.payload;
      return {
        ...state,
        schedules: state.schedules.map(
          item => item._id === schedule._id ? schedule : item)
      }
    default:
      return state;
  }
}