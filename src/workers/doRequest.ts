// Core
import { ActionCreator, AnyAction } from 'redux';
import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
// Common Types
import { SuccesActionType, FailureActionType } from '../types';


type OptionsType<T, E> = {
  getServiceData: (url?: string) => Promise<T>;
  getServiceDataParam?: string;
  startRequest: ActionCreator<AnyAction>;
  finishRequest: ActionCreator<AnyAction>;
  successRequest: SuccesActionType<T>;
  failureRequest: FailureActionType<E>;
}

export function* doRequest<T, E>(options: OptionsType<T, E>): SagaIterator {
  const {
    getServiceData,
    getServiceDataParam,
    startRequest,
    finishRequest,
    successRequest,
    failureRequest,
  } = options;

  try {
    yield put(startRequest());

    const result = yield call(getServiceData, getServiceDataParam);

    yield put(successRequest(result));
  } catch (err) {
    yield put(failureRequest(err));
  } finally {
    yield put(finishRequest());
  }
}
