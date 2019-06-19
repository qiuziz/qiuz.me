/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:30
 * */

import React from 'react';
// import { Link } from 'react-router';

class NavItem extends React.Component<any, any> {

	close = () => {
		this.props.onClose && this.props.onClose();
	}
	
	render() {
		const { show } = this.props;
		return (
			<div className={`nav ${show ? 'nav-opened' : 'nav-closed'}`}>
				<h3 className="nav-title">菜单</h3>
				<span className="nav-close" onClick={this.close}>
					<span className="hidden">关闭</span>
				</span>
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
