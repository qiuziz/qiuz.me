/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:24:59
 * */

import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';
import LocalStorage from './LocalStorage';
import Dashboard from '../container/Dashboard';
import Login from '../container/Login';
import Home from '../container/Home';
import Article from '../container/Article';

const isLogin = (nextState, replace, callback) => {
	const user = LocalStorage.getItem('user');
	if (!user) {
		replace('login');
	} else {
		callback();
	}
}

export default (
	<Route>
		<Route path="/" component={Dashboard} onEnter={(...args) => isLogin(...args)}>
			<IndexRedirect to="/home" />
			<Route path="home" component={Home} />
			<Route path="article" component={Article} />
		</Route>
		<Route path="login" component={Login} />
		<Redirect from="*" to="home" />
	</Route>
);
