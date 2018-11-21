import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'



export default combineReducers({
	loginReducer,
	todoReducer,
	filterReducer,
	tagReducer,
});