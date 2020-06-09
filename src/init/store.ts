// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Instruments
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { middlewares, sagaMiddleware } from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
