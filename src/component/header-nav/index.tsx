/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:42
 * */


import React from 'react';

import './index.less';

import LOGO from '../../assets/images/logo.jpg';
// import MAIN from '../../assets/images/main.jpg';
import { QImgLoad } from '../../component/img-load';

const MAIN = 'https://qiuz.me/content/images/2017/10/11153637-2560-1600.jpg';
export class HeaderNav extends React.Component<any> {

	scrollDown = (e: any) => {
		e.preventDefault();
		window.scrollTo({"behavior": "smooth", "top": window.innerHeight});
	}

	public render() {
		const { root } = this.props;
		return (
			<div className="site-wrapper">
				<header className={`layout-header ${root ? '' : 'no-main'}`} >
					<div className="header-nav">
						{root && <QImgLoad className="main-img" src={MAIN} defaultSrc="" />}
						<nav className="nav">
							<div className="header-nav-logo">
								<QImgLoad  src={LOGO} />
							</div>
							<a className={'menu-button ' + (root ? 'home-button' : '')} href="#">
								<i className="iconfont menu">&#xe62c;</i>
								<span className="word">菜单</span>
							</a>
						</nav>
						{
							root
								? <div className="vertical">
									<div className="main-header-content inner">
										<h1 className="page-title">qiuz</h1>
										<h2 className="page-description">Life is need to record.</h2>
									</div>
								</div>
								: ''
						}
						{
							root
								?	<a className="" href="#content" data-offset="-45" onClick={this.scrollDown}>
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
