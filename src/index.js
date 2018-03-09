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

const store = configureStore(getInitState());
window.store = store;
const history = syncHistoryWithStore(browserHistory, store);
history.listen(() => {
	// Use setTimeout to make sure this runs after React Router's own listener
	setTimeout(() => {
		// Keep default behavior of restoring scroll position when user:
		// - clicked back button
		// - clicked on a link that programmatically calls `history.goBack()`
		// - manually changed the URL in the address bar (here we might want
		// to scroll to top, but we can't differentiate it from the others)
		// In all other cases, scroll to top
		window.scrollTo(0, 0);
	});
});
ReactDOM.render((
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>

), document.getElementById('root'));
registerServiceWorker();
