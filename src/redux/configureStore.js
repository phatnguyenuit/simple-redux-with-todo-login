import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from './reducer';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const logger = createLogger();

export default createStore(
	createRootReducer(history), 
	applyMiddleware(
		routerMiddleware(history),
		thunk, 
		logger
	)
);