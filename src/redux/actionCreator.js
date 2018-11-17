import { 
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
	ACTION_LOGOUT,
} from './constants'

//Fake user
import { users } from '../api/data';

/* Step 1: Login action creator */
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

/* End Step 1 */