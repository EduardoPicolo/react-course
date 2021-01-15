import { createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';

import rootReducer from "./root-reducer"

const middlewares = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export { store, persistor }