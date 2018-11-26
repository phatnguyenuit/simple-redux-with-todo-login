import { combineReducers } from 'redux';
import { REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authenticationReducer from './authenticationReducer';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';
import tagReducer from './tagReducer';

import { ACTION_RESET_STATE } from '../constants';

import { connectRouter } from 'connected-react-router';

export default (history) => {
	const appReducer = combineReducers({
		router: connectRouter(history),
		authenticationReducer,
		todoReducer,
		filterReducer,
		tagReducer,
	});
	const rootReducer = (prevState, action = {}) => {
		const payload = action.payload;
		switch (action.type) {
			case REHYDRATE: {
				return {
					...prevState,
					...payload
				}
			}
			case ACTION_RESET_STATE: {
				Object.keys(prevState).forEach(key => {
					storage.removeItem(`persist:${key}`);
				});
				prevState = undefined;
				return appReducer(prevState, action);
			}
			default:
				return appReducer(prevState, action);
		}
	}
	return rootReducer;
}