/*
 * @Author: qiuziz
 * @Date: 2017-09-06 15:44:06
 * */

class Local {

	constructor() {
		this.delivery = '交付';
		this.overview = '总览';
		this['code-build'] = '代码构建';
		this['image-repos'] = '镜像仓库';
		this.service = '服务';
		this.stack = '服务编排';
		this.deployment = '发布';

		this.mgmt = '管理';
		this['member-mgmt'] = '成员管理';
		this['resource-mgmt'] = '资源调度';
		this['system-mgmt'] = '系统管理';

	}
}

export default new Local();
