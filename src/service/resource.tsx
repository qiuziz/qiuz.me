/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:12:02
 * */

import { fetchResource } from './fetchapi';

const API_HOST = '';
const SERVICE_NAME = '';

export const Resource = {

	/**
	 * bloglist
	 */

	bloglist: fetchResource(`${API_HOST}${SERVICE_NAME}/bloglist`),

};
