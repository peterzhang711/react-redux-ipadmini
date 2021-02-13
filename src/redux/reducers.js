import {
  GET_IPAD_INFOS_START,
  GET_IPAD_INFOS_SUCCESS,
  GET_IPAD_INFOS_FAILED,
  SHOW_HIDE_CONTENT
} from './actionTypes'
import { combineReducers } from 'redux'

const defaultState = {
  ipadInfos: [],
  pending: false,
  errorMessage: ''
}

function contentReducer (state = defaultState, action) {
  switch (action.type) {
    case GET_IPAD_INFOS_START:
      return {
        ...state,
        pending: true
      }
    case GET_IPAD_INFOS_SUCCESS:
      return {
        ...state,
        pending: false,
        ipadInfos: { ...action.ipadInfos }
      }
    case GET_IPAD_INFOS_FAILED:
      return {
        ...state,
        pending: false,
        errorMessage: action.errorMessage
      }
  }
  return state
}

function toggleReducer (state = { contentToggle: true }, action) {
  switch (action.type) {
    case SHOW_HIDE_CONTENT:
      return { ...state, contentToggle: !state.contentToggle }
    default:
      return state
  }
}

export default combineReducers({
  contentReducer,
  toggleReducer
})
