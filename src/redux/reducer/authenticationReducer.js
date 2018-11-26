/* Part 1: Login reducer  */
import { 
	// login
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
	ACTION_LOGOUT,
} from '../constants'

const initialState = {
	user: false,
	error: '',
	isLoading: false,
}

export default (prevState=initialState, action) => {
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
		case ACTION_LOGOUT:{
			return {
				...initialState,
			}
		}
		default:
			return {
				...prevState
			}
	}
}