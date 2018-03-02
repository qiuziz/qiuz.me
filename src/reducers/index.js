/*
 * @Author: qiuziz
 * @Date: 2017-08-15 11:42:42
 * */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user';
import menu from './menu';

const reducers = combineReducers({
	user,
	menu,
	routing: routerReducer
});

export default reducers;
