/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:30
 * */

import React from 'react';
// import { Link } from 'react-router';

class NavItem extends React.Component {
	render() {
		return (
			<div className="nav">
				<h3 className="nav-title">菜单</h3>
				<a href="#" className="nav-close">
					<span className="hidden">关闭</span>
				</a>
				<ul>
					<li className="nav- nav-current" role="presentation"><a href="http://qiuziz.me/">首页</a></li>
					<li className="nav-frontend" role="presentation"><a href="http://qiuziz.me/tag/front-end/">FrontEnd</a></li>
					<li className="nav-life" role="presentation"><a href="http://qiuziz.me/tag/life/">Life</a></li>
				</ul>
				<a className="subscribe-button icon-feed" href="http://qiuziz.me/rss/">订阅</a>
			</div>
		)
	}
}

export default NavItem;
