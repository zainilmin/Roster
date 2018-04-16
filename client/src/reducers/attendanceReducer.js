import {
  FETCH_ATTENDANCE
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
    default:
      return state;
  }
}