/*
 * @Author: qiuziz
 * @Date: 2017-09-06 15:44:14
 * */

import React from 'react';
import {Link, browserHistory} from 'react-router';
import { Breadcrumb, Select } from 'antd';
import Local from './local';
import './style.scss';

const Option = Select.Option;


export default class Navigation extends React.Component {

	componentWillMount() {

	}

	handleChange(value) {
		const {pathname, hash} = this.props;
		const index = pathname.lastIndexOf('/');
		browserHistory.push(pathname.slice(0, index + 1) + value + hash);
	}

	render() {
		let prePath = '';
		let options = <Option value="" />;

		let paths_context = [].map((item, index) => {
			if (index % 2 === 0) {
				prePath = item;
				return <Breadcrumb.Item key={index}>{Local[item] ? Local[item] : item}</Breadcrumb.Item>
			} else {
				if (index === 1) {
					return <Breadcrumb.Item key={index + Math.random()}><Link to={"/" + prePath + "/" + item}>{Local[item] ? Local[item] : item}</Link></Breadcrumb.Item>
				} else {
					return <Breadcrumb.Item key={index + Math.random()}>
						<Select style={{ width: 200 }} defaultValue={item} onChange={this.handleChange}>
							{options}
						</Select>
					</Breadcrumb.Item>
				}
			}
		});
		return (
			<div className="navigation">
				<Breadcrumb>
					{paths_context}
				</Breadcrumb>
			</div>
		)
	}
}
