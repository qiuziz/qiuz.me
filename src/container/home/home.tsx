/*
 * @Author: zhaoyn
 * @Date: 2019-03-04 14:38:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-18 16:15:01
 */
import './index.less';
import * as React from 'react';

import { routes } from '../../router';
import { List } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import { BlogList } from '../../component';
interface PropsType {
	History: any;
	location: any;
	history: any;
	bolgList: any[],
	getBlogList: () => void;
}

@inject((stores: any) => {
	return {
		bolgList: stores.homeStore.bolgList,
		getBlogList: stores.homeStore.getBlogList
	}
})
@observer
export class Home extends React.Component<PropsType, any> {
	constructor(props: any) {
		super(props);
		console.log(props);
		this.state = {
			
		}
	}

	componentWillMount() {

	}
	componentDidMount() {
		this.props.getBlogList();
	}

	go = (path: string) => () => {
		this.props.History.push({
			pathname: path
		})
	}


	public render() {
		const { bolgList } = this.props;
		console.log(bolgList)
		return (
			<div className='home'>
				<BlogList list={bolgList}/>
			</div>
		);
	}
}

