/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 17:56:14
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-21 15:22:54
 */

import React from 'react';
import './index.less';
import LOGO from '../../assets/images/logo.jpg';
import { inject, observer } from 'mobx-react';
import { getUrlParams, isEmptyObject } from '../../common';
// @ts-ignore
import ReactMarkdown from 'react-markdown/with-html';
@inject((stores: any) => {
	return {
		getBlog: stores.articleStore.getBlog,
		article: stores.articleStore.article,
	}
})
@observer
export class Article extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
		const urlParams: any = getUrlParams();
		this.state = {
			blogId: '',
			...urlParams
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		const { blogId } = this.state;
		if (isEmptyObject(this.props.article)) {
			this.props.getBlog(blogId);
		}
	}



	render() {
		const { article } = this.props;
		const time = new Date(article.created_at);
		const createDate = time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日';
		return (
			<div className="article">
				<article className="post">
					<header className="post-header">
						<h1 className="post-title">{article.title}</h1>
						<section className="post-meta">
							<time className="post-date">{createDate}</time>
						</section>
					</header>

					<section className="post-content" dangerouslySetInnerHTML={{__html: article.html}} />
					{/* <ReactMarkdown source={article.html} escapeHtml={false} /> */}
					<footer className="post-footer">
						<figure className="author-image">
							<span className="img" style={{backgroundImage: `url(${LOGO})` }} />
						</figure>
					</footer>
				</article>
			</div>
		)
	}
}