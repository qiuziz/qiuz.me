/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:42:39
 * */

import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const middleware = [routerMiddleware(hashHistory), thunkMiddleware, promiseMiddleware];
process.env.NODE_ENV === 'development' && middleware.push(createLogger());

export default (initialState = {}) => {
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(...middleware)
	)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}


