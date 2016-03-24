import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import _ from 'lodash';

import { getVideos, selectVideo } from './actions'
//import SearchBar from './components/search_bar';
import VideoList from './video_list.js'
import VideoListItem from './video_list_item.js'
import VideoDetail from './video_detail.js'

class App extends Component {
  constructor(props) {
    super(props);
}

  componentDidMount() {
  	this.getVideos('surfboards');
  }

  getVideos(term) {
  	this.props.dispatch(getVideos(term))
  }

  selectAVideo(video) {
  	this.props.dispatch(selectVideo(video))
  }

  render () {
  	const { videos, selectedVideo } = this.props
    return (
      <div>
        {selectedVideo ? <VideoDetail video={selectedVideo.selectedVideo} /> : 
        	<div>Loading...</div>}
        <VideoList
        videos={videos} 
        onVideoSelect={selectedVideo => this.selectAVideo({selectedVideo}) } /> 
      </div>
    );
  }
}


function mapStateToProps(state) {
  const videos = state.getVideos.videos
  const selectedVideo = state.selectVideo.selectedVideo
  return {
 	videos,
 	selectedVideo,
  }
}

export default connect(mapStateToProps)(App)