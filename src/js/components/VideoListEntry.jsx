import React from 'react';
import PropTypes from 'prop-types';

class VideoListEntry extends React.Component {
	constructor() {
		super();
	}
	render() {
		const { video } = this.props;
		console.log('video in videoListEntry', video);
		return (
			<div className="videoListEntry">
				<div className="videoListEntry">
					<div className="media">
						<div className="media-left media-middle">
							<img
								className="media-object"
								alt=""
								src={video.snippet.thumbnails.default.url}
							/>
						</div>
						<div className="media-body">
							<button className="media-heading">
								{video.snippet.title}
							</button>
							<p className="media-description">
								{video.snippet.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoListEntry;

VideoListEntry.propTypes = {
	//getAction: PropTypes.func.isRequired
};
