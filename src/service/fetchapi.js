/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:10:41
 * */

import 'whatwg-fetch';

const fetchMethod = (_url, _config) => {
	return fetch(_url, _config)
					.then(response => {
						if (!response.ok) {
							return response.json().then(err => { throw err; });
						}
						return response.json().then(undefined, () => Promise.resolve(''));
					})
					.catch(err => {
						throw err;
					});
};

const matchUrlSearchParams = (url, urlSearchParams) => {
	if (!urlSearchParams) {
		return url.replace(/\/:[^?]+/g, '');
	}
	let u = new URLSearchParams();
	let _url = Object.keys(urlSearchParams).reduce((pre, next) => {
		if (pre.includes(':' + next)) {
			return pre.replace(':' + next, urlSearchParams[next]);
		} else {
			if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
				urlSearchParams[next].forEach(value => {
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

	headers = {};

	constructor(_url) {
		this.url = _url;
		// this.headers.append("Content-Type", "application/json");
		this.headers["Content-Type"] = "application/json";
	}

	get = (urlSearchParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams), config);
	};

	post = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'POST',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	delete = (urlSearchParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'DELETE'
			})
		);
	};

	put = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PUT',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	patch = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PATCH',
				body: JSON.stringify(bodyParams)
			})
		);
	}
}

const fetchResource = url => {
	return new FetchApi(url);
};

export { fetchResource };
