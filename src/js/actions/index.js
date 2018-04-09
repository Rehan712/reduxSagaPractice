import { GET_VIDEOS, GET_VIDEOS_SUCCESS } from '../constants';

export function getVideos(query) {
	return {
		type: GET_VIDEOS,
		payload: query
	};
}

export function getVideosSuccess(videos) {
	return {
		type: GET_VIDEOS_SUCCESS,
		payload: videos
	};
}
