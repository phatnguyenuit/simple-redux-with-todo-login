import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'

import { connectRouter } from 'connected-react-router'

export default ( history ) => combineReducers({
	router: connectRouter(history),
	authenticationReducer,
	todoReducer,
	filterReducer,
	tagReducer,
});