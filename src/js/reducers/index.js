import { combineReducers } from 'redux';
import getVideosReducer from './getVideosReducer';

const rootReducer = combineReducers({
	videoList: getVideosReducer
});

export default rootReducer;
