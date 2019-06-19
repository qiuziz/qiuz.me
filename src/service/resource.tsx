/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:12:02
 * */

import { fetchResource } from './fetchapi';

const API_HOST = '';
const SERVICE_NAME = '/qiuz';

export const Resource = {

	/**
	 * bloglist
	 */
	blogList: fetchResource(`${API_HOST}${SERVICE_NAME}/blogList`),

	/**
	 * blog detail
	 */
	getBlog: fetchResource(`${API_HOST}${SERVICE_NAME}/blog`),

};
