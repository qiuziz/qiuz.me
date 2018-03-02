/*
 * @Author: qiuziz
 * @Date: 2017-09-08 15:20:47
 * */

import { handleActions } from 'redux-actions';
import { queryMenuSetting } from '../actions/menu';

const menu = handleActions({
	[queryMenuSetting]: (state, actions) => ({
		list: actions.payload
	})
}, {
	list: []
});

export default menu;
