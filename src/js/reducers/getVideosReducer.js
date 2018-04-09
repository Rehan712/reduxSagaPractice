import { GET_VIDEOS_SUCCESS, SELECT_VIDEO } from '../constants';

const initial = { videos: [] };

export default function(state = initial, action) {
	switch (action.type) {
		case GET_VIDEOS_SUCCESS:
			return { ...state, videos: action.payload };
	}
	return state;
}
