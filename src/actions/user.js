/*
 * @Author: qiuziz
 * @Date: 2017-08-15 11:07:51
 * */

// import { Resource } from '../service/resource';
import { createActions } from 'redux-actions';

export const {login, logout} = createActions({
	LOGIN: param => param,
	LOGOUT: () => {}
});

