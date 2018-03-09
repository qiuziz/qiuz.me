/*
 * @Author: qiuziz
 * @Date: 2018-03-06 11:05:07
 * */

import React from 'react';
import './index.scss';

export default class Article extends React.Component {

	constructor(props) {
		super(props);
	}

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
							<a className="img" href="/author/qiuz/" style={{backgroundImage: 'url(/logo.jpg)' }} />
						</figure>
					</footer>
				</article>
			</div>
		)
	}
}

