/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:24:59
 * */

import React from 'react';

import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import Navigation from '../../components/Navigation';

export default class dashboard extends React.Component {

	componentDidMount() {
	}

	logoOut() {
		const { history, logout } = this.props;
		logout();
		history.replace({pathname: 'login'});

	}
	render() {
		const { children } = this.props;
		const content = <div className="content-body">
			<Navigation />
			<section className="content-main">
				{children}
			</section>
		</div>;
		const logo = {
			name: 'title',
			label: <img src="/logo.jpg" alt="logo" />
		};

		return (
			<Layout
				header={<HeaderNav logo={logo} />
				}
				// aside = {
				// 	<Menu menuList={menuList} selectedItems={selectedItems} />
				// }
				content = {
					content
				}
			/>
		)
	}
}

