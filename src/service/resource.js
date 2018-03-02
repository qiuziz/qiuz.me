/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:12:02
 * */

import { fetchResource } from './fetchapi';

const API_HOST = '';
const SERVICE_NAME = '';

export const Resource = {

	/**
	 * login
	 */

	login: fetchResource(`${API_HOST}${SERVICE_NAME}/login`), 

	/**
	 * 接口 user
	 */

	getUsers: fetchResource(`${API_HOST}${SERVICE_NAME}/getUsers`), 

	updateUser: fetchResource(`${API_HOST}${SERVICE_NAME}/updateUser`), 
	
	addUser: fetchResource(`${API_HOST}${SERVICE_NAME}/addUser`), 

	getOneUser: fetchResource(`${API_HOST}${SERVICE_NAME}/getOneUser`), 
	

	/**
	 * 接口 worklog
	 * 获取项目列表
	 * 添加项目
	 * 更新项目
	 * 删除项目
	 * 所有项目工作量
	 * 添加日志
	 * 获取日志列表
	 * 删除日志
	 * 日志详情
	 * 
	 */
	getProjects: fetchResource(`${API_HOST}${SERVICE_NAME}/getProjects`),

	addProject: fetchResource(`${API_HOST}${SERVICE_NAME}/addProject`),

	updateProject: fetchResource(`${API_HOST}${SERVICE_NAME}/updateProject`),

	deleteProject: fetchResource(`${API_HOST}${SERVICE_NAME}/deleteProject`),

	getProjecAllUser: fetchResource(`${API_HOST}${SERVICE_NAME}/getProjecAllUser`),

	addRecord: fetchResource(`${API_HOST}${SERVICE_NAME}/addRecord`),

	getRecordList: fetchResource(`${API_HOST}${SERVICE_NAME}/getRecordList`),
	
	deleteRecord: fetchResource(`${API_HOST}${SERVICE_NAME}/deleteRecord`),
	
	getOneRecord: fetchResource(`${API_HOST}${SERVICE_NAME}/getOneRecord`),

	
};
