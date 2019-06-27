/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:10:41
 * */

import 'whatwg-fetch';
import { Toast } from 'antd-mobile';

const fetchMethod = async (_url: any, _config: any) => {
	try {
		const response = await fetch(_url, _config);
		if (!response.ok) {
			return response.json().then(err => { throw err; });
		}
		const result = await response.json();
		if(result.code !== '0000') {
			Toast.info(result.msg);
			throw result.msg;
		}
		return result;
	}
	catch (err) {
		throw err;
	}
};

const matchUrlSearchParams = (url: any, urlSearchParams: any) => {
	if (!urlSearchParams) {
		return url.replace(/\/:[^?]+/g, '');
	}
	let u = new URLSearchParams();
	let _url = Object.keys(urlSearchParams).reduce((pre, next) => {
		if (pre.includes(':' + next)) {
			return pre.replace(':' + next, urlSearchParams[next]);
		} else {
			if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
				urlSearchParams[next].forEach((value: string) => {
					u.append(next, value);
				})
			} else {
				u.append(next, urlSearchParams[next]);
			}
			return pre;
		}
	}, url);
	_url = _url.replace(/\/:[^?]+/g, '');
	return _url + (u.toString() === '' ? '' : '?' + u);
};

class FetchApi {

	headers: any = {};
  url = '';
	constructor(_url: any) {
		this.url = _url;
		// this.headers.append("Content-Type", "application/json");
		this.headers["Content-Type"] = "application/json";
	}

	get = (urlSearchParams?: any, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams), config);
	};

	post = (urlSearchParams: any, bodyParams: any, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'POST',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	upload = (urlSearchParams: object, bodyParams: FormData, config = {headers: {}}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign({ ...config }, {
				method: 'POST',
				body: bodyParams
			})
		);
	};

	delete = (urlSearchParams: any, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'DELETE'
			})
		);
	};

	put = (urlSearchParams: any, bodyParams: any, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PUT',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	patch = (urlSearchParams: any, bodyParams: any, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PATCH',
				body: JSON.stringify(bodyParams)
			})
		);
	}
}

const fetchResource = (url: string) => {
	return new FetchApi(url);
};

export { fetchResource };
