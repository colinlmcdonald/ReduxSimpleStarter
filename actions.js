import YTSearch from 'youtube-api-search';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const SELECT_VIDEO = 'SELECT_VIDEO'

const API_KEY = 'AIzaSyAGlFtkEMkq15FPey3T-SPSZ8f-ZjD0bc0'

export function selectVideo(selectedVideo) {
  return {
    type: SELECT_VIDEO,
    selectedVideo
  }
}


function receiveVideos(videos) {
  return {
    type: RECEIVE_VIDEOS,
    videos: videos,
    selectedVideo: videos[0]
  }
}

export function getVideos (term) {
	return dispatch => {
    return YTSearch({ key: API_KEY, term: term}, (videos) => {
        dispatch(receiveVideos(videos))
    });
  }
}
