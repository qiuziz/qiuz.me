/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:01:02
 * */


import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';

class SYMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.getKeysFromSelectedItems(props.selectedItems);
	}

	componentWillReceiveProps = nextProps => {
		this.setState(this.getKeysFromSelectedItems(nextProps.selectedItems));
	}

	getKeysFromSelectedItems = (list = []) => {
		const openKeys = [];
		let current = '';
		list.forEach(subMenu => {
			subMenu.child.forEach(menuItem => {
				current = menuItem.key;
				openKeys.push(subMenu.key);
			})
		});
		return {openKeys, current};
	}

	handleClick = ({ key }) => {
		const selectedItems = this.getKeysFromSelectedItems(this.props.selectedItems);
		selectedItems.current === key && this.setState({ current: key });
	}

	onOpenChange = openKeys => {
		this.setState({ openKeys });
	}

	render() {
		const styles = {
			height: '100%'
		};
		const MenuContent = this.props.menuList.map(subMenu =>
			<Menu.SubMenu
				key={subMenu.key}
				title={<span><Icon type={subMenu.icon}/>{subMenu.title}</span>}
			>
				{subMenu.child.map(menuItem =>
					<Menu.Item key={menuItem.key}>
						<Link to={menuItem.route}>{menuItem.title}</Link>
					</Menu.Item>
				)}
			</Menu.SubMenu>
		);

		return (
			<Menu
				mode="inline"
				selectedKeys={[this.state.current]}
				openKeys={this.state.openKeys}
				style={styles}
				onOpenChange={this.onOpenChange}
				onClick={this.handleClick}
			>
				{MenuContent}
			</Menu>
		)
	}
}

export default SYMenu;
