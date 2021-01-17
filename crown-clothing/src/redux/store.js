import { createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from "./root-reducer"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store)

export { store, persistor }