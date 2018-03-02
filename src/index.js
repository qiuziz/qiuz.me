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
ReactDOM.render((
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>

), document.getElementById('root'));
registerServiceWorker();
