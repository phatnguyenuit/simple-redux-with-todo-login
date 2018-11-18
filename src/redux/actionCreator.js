import { uniqueId } from 'lodash';
import { 
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
	ACTION_LOGOUT,
	ACTION_ADD_TODO,
	ACTION_TOGGLE_FILTER,
	ACTION_TOGGLE_TAG,
} from './constants'

//Fake user
import { users, prefixIdTodo } from '../api/data';

/* Part 1: Login action creator */
const actionLoginStart = () => ({
	type: ACTION_LOGIN_PENDING
})

const actionLoginSuccess = (user) => ({
	type: ACTION_LOGIN_SUCCESS,
	payload: {
		user
	},
})

const actionLoginFail = (error) => ({
	type: ACTION_LOGIN_FAIL,
	payload: {
		error
	}
})

export const actionLogin = (login, password) => dispatch => {
	dispatch(actionLoginStart());
	setTimeout(() => new Promise(
		(resolve, reject) => {
			let loginUser = users.filter( user => user.login === login);
			if (loginUser && loginUser[0].password === password){
				resolve(loginUser[0]);
			}
			else
				reject(new Error('Wrong username or passwrod!'));
		}
	).then(loginUser => {
		dispatch(actionLoginSuccess(loginUser))
	})
	.catch(error => {
		dispatch(actionLoginFail(error.message));
	}), 3000);
}

export const actionLogout = () => ({
	type: ACTION_LOGOUT
})

/* End Part 1 */

/* Part 2: Todo action creator */
export const actionAddTodo = ( description ) => {
	let todo = false;
	if (description) {
		todo = {
			id: uniqueId(prefixIdTodo),
			description,
			status: 'not_start'
		}
	}
	return {
		type: ACTION_ADD_TODO,
		payload: {
			todo
		}
	}
}

/* Part 3:  Filter action creator */
export const actionToggleFilter = ( filter ) => {
	return {
		type: ACTION_TOGGLE_FILTER,
		payload: {
			activeFilter: filter
		}
	}
}

/* Part 4: Tag action creator */
export const actionToggleTag = ( tag ) => {
	return {
		type: ACTION_TOGGLE_TAG,
		payload: {
			activeTag: tag
		}
	}
}