/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:24:59
 * */

import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';
import LocalStorage from './LocalStorage';
import dashboard from '../container/dashboard';
import Login from '../container/login';
import Page1 from '../container/page1';
import Page2 from '../container/page2';

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
		<Route path="/" component={dashboard} onEnter={(...args) => isLogin(...args)}>
			<IndexRedirect to="/page1" />
			<Route path="page1" component={Page1} />
			<Route path="page2" component={Page2} />
		</Route>
		<Route path="login" component={Login} />
		<Redirect from="*" to="page1" />
	</Route>
);
