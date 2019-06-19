/*
 * @Author: zhaoyn
 * @Date: 2019-03-04 14:38:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-19 12:51:37
 */
import './index.less';
import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { BlogList } from '../../component';
interface PropsType {
	History: any;
	location: any;
	history: any;
	bolgList: any[],
	getBlogList: () => void;
	setArticle: (data: object) => void;
}

@inject((stores: any) => {
	return {
		bolgList: stores.homeStore.bolgList,
		getBlogList: stores.homeStore.getBlogList,
		getBlog: stores.articleStore.getBlog,
		setArticle: stores.articleStore.setArticle,
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

	onItemClick = (data: any) => {
		this.props.setArticle(data);
		this.props.History.push({
			pathname: `/article`,
			search: `blogId=${data.id}`
		});
	}


	public render() {
		const { bolgList } = this.props;
		console.log(bolgList)
		return (
			<div className='home'>
				<BlogList list={bolgList} onItemClick={this.onItemClick}/>
			</div>
		);
	}
}

