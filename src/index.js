import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './service/store';
import routes from './service/router';
import LocalStorage from './service/LocalStorage';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';


injectTapEventPlugin();
const getInitState = () => ({
	user: {
		userInfo: LocalStorage.getItem('user') || {}
	}
});
const hashLinkScroll = () => {
	const { hash } = window.location;
	if (hash !== '') {
		// Push onto callback queue so it runs after the DOM is updated,
		// this is required when navigating from a different page so that
		// the element is rendered on the page before trying to getElementById.
		setTimeout(() => {
			const id = hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) element.scrollIntoView();
		}, 0);
	}
}

const store = configureStore(getInitState());
window.store = store;
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((
	<Provider store={store}>
		<Router history={history} routes={routes} onUpdate={hashLinkScroll}/>
	</Provider>

), document.getElementById('root'));
registerServiceWorker();
