/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:42
 * */


import React from 'react';

import './style.scss';

class HeaderNav extends React.Component {

	scrollDown(e) {
		e.preventDefault();
		window.scrollTo({"behavior": "smooth", "top": window.innerHeight});
	}

	render() {
		const { logo } = this.props;
		const home = window.location.pathname === '/home';
		return (
			<div className="site-wrapper">
				<header className="layout-header" style={{height: home ? '100vh' : '85px'}} >
					<div className="header-nav" style={{background: home ? '#222 url(/main.jpg) no-repeat center center / cover' : 'transparent'}}>
						<nav className="nav">
							<div className="header-nav-logo" onClick={logo.onClick}>{logo.label}</div>
							<a className={'menu-button ' + (home ? 'home-button' : '')} href="#">
								<i className="iconfont menu">&#xe62c;</i>
								<span className="word">菜单</span>
							</a>
						</nav>
						{
							home
								? <div className="vertical">
									<div className="main-header-content inner">
										<h1 className="page-title">qiuz</h1>
										<h2 className="page-description">Life is need to record.</h2>
									</div>
								</div>
								: ''
						}
						{
							home
								?	<a className="" href="#content" data-offset="-45" onClick={e => this.scrollDown(e)}>
									<i className="iconfont scroll-down">&#xe62d;</i>
								</a>
								: ''
						}

					</div>
				</header>
			</div>
		)
	}
}

export default HeaderNav;
