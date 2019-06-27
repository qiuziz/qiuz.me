/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 17:56:14
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-27 11:43:21
 */

import React from 'react';
import './index.less';
import { inject, observer } from 'mobx-react';
import { getUrlParams } from '../../common';
import { Upload, Icon, Input } from 'antd';
import { Resource } from 'service/resource';
import { Toast } from 'antd-mobile';
const { Dragger } = Upload;

@inject((stores: any) => {
	return {
		getBlog: stores.articleStore.getBlog,
		article: stores.articleStore.article,
	}
})
@observer
export class Post extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
		const urlParams: any = getUrlParams();
		this.state = {
			title: '',
			...urlParams
		};
	}

	componentDidMount() {

	}

	onChange = (info: any) => {
		console.log(info);
	}

	upload = (data: any) => {
		console.log(data);
		const { title } = this.state;
		// if (!title) {
		// 	Toast.info('标题不能为空');
		// 	return;
		// }
		const formData = new FormData();
		formData.append('file', data.file);
		formData.append('title', title);
		Resource.postBlog.upload({}, formData).then((res: any) => {
			console.log(res);
		}).catch(err => console.log(err));
	}

	updateTile = (e: any) => {
		this.setState({title: e.target.value});
	}

	render() {
		const { title } = this.state;
		return (
			<div className="upload-content">
					<div className="upload-title">
						<label>标题</label>
						<Input value={title} onChange={this.updateTile}/>
					</div>
				
          <Dragger
						name="file"
						// action="/qiuz/upload"
						customRequest={this.upload}
						onChange={this.onChange}
					>
				    <p className="ant-upload-drag-icon">
				      <Icon type="inbox" />
				    </p>
				    <p className="ant-upload-text">Click or drag file to this area to upload</p>
				    <p className="ant-upload-hint">
				      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
				      band files
				    </p>
				  </Dragger>
			</div>
		)
	}
}