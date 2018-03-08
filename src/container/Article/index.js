/*
 * @Author: qiuziz
 * @Date: 2018-03-06 11:05:07
 * */

import React from 'react';
import { Resource } from '../../service/resource';

export default class Article extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		Resource.bloglist.get().then(res => {
			if (res && res.list) {
				this.setState({list: res.list});
			}
		})
	}

	render() {
		return (
			<div className="home-content" id="content">
				aaa
			</div>
		)
	}
}

