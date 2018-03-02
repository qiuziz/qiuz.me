/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:56:38
 * */

/**
 * Created by zhouxing on 2016/12/9.
 */
import { handleActions } from 'redux-actions';
import { login, logout } from '../actions/user';
import LocalStorage from '../service/LocalStorage';

const Login = handleActions({
	[login]: (state, actions) => {
		LocalStorage.setItem('user', actions.payload);
		return {
			...state,
			userInfo: actions.payload
		}
	},
	[logout]: state => {
		LocalStorage.removeItem('user');
		return {
			...state,
			userInfo: {}
		}
	}
}, {userInfo: {username: ''}})

export default Login;

