/*
 * @Author: qiuziz
 * @Date: 2017-09-07 15:26:25
 * */

import React from 'react';
import { Button, Row, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import './index.scss';

const FormItem = Form.Item;

@connect(
	state => ({
		user: state
	}), {
		login
	}
)
class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}


	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.login(values);
				this.props.history.replace({pathname: '/'})
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="form">
				<div className="logo">
					<img alt={'logo'} src="" />
					<span>react</span>
				</div>
				<Form onSubmit={this.handleSubmit}>
					<FormItem hasFeedback>
						{getFieldDecorator('username', {
							rules: [
								{
									required: true
								}
							]
						})(<Input size="large" placeholder="Username" />)}
					</FormItem>
					<FormItem hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true
								}
							]
						})(<Input size="large" type="password" placeholder="Password" />)}
					</FormItem>
					<Row>
						<Button type="primary" htmlType="submit" size="large">
            Sign in
						</Button>
					</Row>

				</Form>
			</div>
		)
	}
}

export default Form.create()(SignInForm);
