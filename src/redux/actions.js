import {
  GET_IPAD_INFOS_START,
  GET_IPAD_INFOS_SUCCESS,
  GET_IPAD_INFOS_FAILED,
  SHOW_HIDE_CONTENT
} from './actionTypes'

import axios from 'axios'

export const getIpadInfos = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_IPAD_INFOS_START
    })
    try {
      const result = await axios.get('./content.json')
      dispatch({
        type: GET_IPAD_INFOS_SUCCESS,
        ipadInfos: result.data
      })
    } catch (e) {
      dispatch({
        type: GET_IPAD_INFOS_FAILED,
        errorMessage: JSON.stringify(e)
      })
    }
  }
}

export const switchContentToggle = (contentToggle) => ({ type: SHOW_HIDE_CONTENT, data: contentToggle })
