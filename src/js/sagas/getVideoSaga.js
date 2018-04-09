import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from '../actions';
import * as api from '../api';

export default function* getVideoSaga(action) {
	const query = action.payload;
	try {
		const response = yield call(api.youtube, query);
		yield put(actions.getVideosSuccess(response.items));
	} catch (e) {
		console.log('cannot got the vidoes');
	}
}
