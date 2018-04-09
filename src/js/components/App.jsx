import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import VideoListEntry from './VideoListEntry';

class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getVideos('naruto last episode');
  }

  render() {
    let { videoList } = this.props;
    console.log(videoList);
    // console.log('our data is ', getVideos());

    return (
      <div className="app">
        <div className="col-md-8" />
        <div className="col-md-4">
          {[...videoList].map(({ ...video }, index) => (
            <VideoListEntry key={index} video={video} />
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

function mapStateToProps({ videoList }) {
  return {
    videoList: videoList.videos
  };
}

export default connect(mapStateToProps, { getVideos: actions.getVideos })(App);
