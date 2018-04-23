import {
  FETCH_ATTENDANCE, UPDATE_ATTENDANCE
  } from '../actions/types'

const defaultState = {
  attendance: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_ATTENDANCE:
      return {
        ...state,
        attendance: action.payload
      }
    case UPDATE_ATTENDANCE:
      const attendance = action.payload;
      return {
        ...state,
        attendance: attendance
      }
    default:
      return state;
  }
}
