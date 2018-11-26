import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from './reducer';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
export const persistConfig = {
	key:  'root',
	stateReconciler: autoMergeLevel1,
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();

export default () => {
	let store = createStore(
		persistedReducer,
		{},
		applyMiddleware(
			routerMiddleware(history),
			thunk, 
			logger
		)
	);
	let persistor = persistStore(store);
	return { store, persistor };
}