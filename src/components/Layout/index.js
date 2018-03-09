/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:51
 * */

import React from 'react';

import './style.scss';

class Layout extends React.Component {

	render() {
		const {header, aside, content} = this.props;
		return (
			<div className="layout">
				{header}
				<div className="layout-body">
					<aside className="layout-aside">{aside}</aside>
					<main className="layout-content">{content}</main>
				</div>
				{/*
				<div className="layout-footer">
					基础框架 ©2017 Created by qiuz
				</div>
				*/}
			</div>)
	}
}

export default Layout;
