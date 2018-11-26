import { combineReducers } from 'redux';
import { REHYDRATE } from 'redux-persist';

import authenticationReducer from './authenticationReducer'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'

import { connectRouter } from 'connected-react-router'

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
				console.log('Using persist state: ', payload);
				return {
					...prevState,
					...payload
				}
			}
			default:
				return appReducer(prevState, action);
		}
	}
	return rootReducer;
}