import { combineReducers } from 'redux'
import { 
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
} from './constants'

const initialLoginState = {
	user: false,
	error: '',
	isLoading: false,
}
const loginReducer = (prevState=initialLoginState, action) => {
	switch (action.type) {
		case ACTION_LOGIN_PENDING:
			return {
				...prevState,
				isLoading: true
			}
		case ACTION_LOGIN_SUCCESS:{
			let {user} = action.payload;
			return {
				...prevState,
				user,
				isLoading: false,
				error: '',
			}
		}
		case ACTION_LOGIN_FAIL:{
			let {error} = action.payload;
			return {
				...prevState,
				error,
				isLoading: false,
				user: false,
			}
		}
		default:
			return {
				...prevState
			}
	}
}

const todoReducer = (prevState, action) => {
	switch (action.type) {
		default:
			return {
				...prevState
			}
	}
}

export default combineReducers({
	loginReducer,
	todoReducer,
});