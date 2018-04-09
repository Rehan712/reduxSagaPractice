import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants';
import getVideoSaga from './getVideoSaga';

function* watchGetVideos() {
	yield takeEvery(types.GET_VIDEOS, getVideoSaga);
}

export default function* rootSaga() {
	yield all([watchGetVideos()]);
}
