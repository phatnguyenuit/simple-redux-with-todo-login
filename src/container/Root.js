import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/configureStore';

import { history } from '../redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
)

export default Root;