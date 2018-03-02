/*
 * @Author: qiuziz
 * @Date: 2017-09-08 15:20:06
 * */

import { createActions } from 'redux-actions';

import { menu } from '../common/menu';

export const { queryMenuSetting } = createActions({
	QUERY_MENU_SETTING: () => menu
});
