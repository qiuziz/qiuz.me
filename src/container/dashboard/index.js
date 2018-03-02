/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:24:59
 * */

import React from 'react';
import { connect } from 'react-redux';
import {createSelector} from 'reselect';

import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import Menu from '../../components/Menu';
import Navigation from '../../components/Navigation';
import { logout, queryMenuSetting } from '../../actions';


const selectedItemsSelector = (list = [], route = '') =>
	list.map(subMenu => ({
		...subMenu,
		child: subMenu.child.filter(menuItem => route.indexOf(menuItem.route) > -1)
	})
	);

@connect(
	state => ({
		user: state.user.userInfo,
		menuList: state.menu.list,
		selectedItems: createSelector(
			state => state.menu.list,
			state => {
				return state.routing.locationBeforeTransitions.pathname;
			},
			selectedItemsSelector
		)(state)
	}), {
		logout,
		queryMenuSetting
	}
)
export default class dashboard extends React.Component {

	componentDidMount() {
		this.props.queryMenuSetting();
	}

	logoOut() {
		const { history, logout } = this.props;
		logout();
		history.replace({pathname: 'login'});

	}
	render() {
		const { menuList, children, user, selectedItems } = this.props;
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
		const navItems = [{
			name: 'userName',
			label: user.username
		}, {
			name: 'logout',
			label: 'Logout',
			fn: () => this.logoOut()
		}];

		return (
			<Layout
				header={<HeaderNav logo={logo} navItems={navItems} />
				}
				aside = {
					<Menu menuList={menuList} selectedItems={selectedItems} />
				}
				content = {
					content
				}
			/>
		)
	}
}

