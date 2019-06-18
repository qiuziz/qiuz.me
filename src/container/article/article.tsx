/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 17:56:14
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-18 18:06:24
 */

import React from 'react';
import './index.less';
import LOGO from '../../assets/images/logo.jpg';

export class Article extends React.Component<any> {

	render() {
		const { data } = this.props.location.state;
		const time = new Date(data.created_at);
		const createDate = time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日';
		return (
			<div className="article">
				<article className="post">
					<header className="post-header">
						<h1 className="post-title">{data.title}</h1>
						<section className="post-meta">
							<time className="post-date">{createDate}</time>
						</section>
					</header>

					<section className="post-content" dangerouslySetInnerHTML={{__html: data.html}} />

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