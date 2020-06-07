// Core
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Instruments
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { middleware, sagaMiddleware } from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
