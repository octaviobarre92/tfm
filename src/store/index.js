import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const middlewares = [];
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore({
	reducer: rootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares, sagaMiddleware),
	devTools: process.env.NODE_ENV === 'development',
})

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(rootReducer(store.asyncReducers));
	return store
}
sagaMiddleware.run(rootSaga)

export default store


