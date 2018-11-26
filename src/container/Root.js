import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../redux/configureStore';

import { history } from '../redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';

import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();

const Root = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</PersistGate>
	</Provider>
)

export default Root;