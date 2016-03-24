import { combineReducers } from 'redux'
import { RECEIVE_VIDEOS, SELECT_VIDEO } from './actions'

function getVideos(state = {
  videos: []
}, action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        videos: action.videos, 
      })
    default:
      return state
  }
}

function selectVideo(state = {
  selectedVideo: null
}, action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        selectedVideo: action.selectedVideo
      })
    case SELECT_VIDEO:
      return Object.assign({}, state, {
        selectedVideo: action.selectedVideo
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getVideos,
  selectVideo
})

export default rootReducer