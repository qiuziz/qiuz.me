/*
 * @Author: qiuziz
 * @Date: 2017-08-21 19:28:17
 * */

import { browserHistory } from 'react-router';


const BrowserUtils = {

  direction: this.direction || 'right',

	push(params) {
    browserHistory.push(params);
    this.direction = 'right';
	},

	replace(params) {
    browserHistory.replace(params);
    this.direction = 'right';
	},

	goBack() {
		browserHistory.goBack();
    this.direction = 'left';
	}

};

export default BrowserUtils;