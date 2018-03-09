/*
 * @Author: qiuziz
 * @Date: 2017-08-21 19:28:17
 * */

import { browserHistory } from 'react-router';


const BrowserUtils = {


	push(params) {
		browserHistory.push(params);
	},

	replace(params) {
		browserHistory.replace(params);
	},

	goBack() {
		browserHistory.goBack();
	}

};

export default BrowserUtils;
