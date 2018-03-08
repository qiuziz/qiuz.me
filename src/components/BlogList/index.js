/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:51
 * */

import React from 'react';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

import './style.scss';

class BlogList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.list || []
		}
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.list && nextProps.list.length > 0) {
	// 		this.setState({data: nextProps.list});
	// 	}
	// }
	render() {
		const { list } = this.props;
		return (
			<div className="list-content">
				{
					list.map((item, index) => {
						return (
							<article className="post" key={index}>
								<a href="/article">
									<header className="post-header">
										<h2 className="post-title">
											{item.title}
										</h2>
									</header>
									<section className="post-excerpt" >
										<HTMLEllipsis
											unsafeHTML={item.html}
											maxLine="3"
											ellipsis=" »"
											basedOn="letters"
										/>
									</section>
								</a>
								<footer className="post-meta">
									<img className="author-thumb" src="//cn.gravatar.com/avatar/6a228b5bbc821a0e291f1e49072f8121?s=250&amp;d=mm&amp;r=x" alt="qiuz" />
									<a href="/author/qiuz/">qiuz</a>
									<time className="post-date" dateTime="2017-05-24">2017年05月24日</time>
								</footer>
							</article>
						)
					})

				}
			</div>)
	}
}

export default BlogList;
