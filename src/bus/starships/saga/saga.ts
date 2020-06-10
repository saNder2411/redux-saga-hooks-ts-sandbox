
// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { FETCH_STARSHIPS_ASYNC } from '../types';

// Workers
import { fetchStarships } from '../index';

function* watchFetchStarships(): SagaIterator {
  yield takeEvery(FETCH_STARSHIPS_ASYNC, fetchStarships);
}

export function* watchStarships(): SagaIterator {
  yield all([call(watchFetchStarships)]);
}
