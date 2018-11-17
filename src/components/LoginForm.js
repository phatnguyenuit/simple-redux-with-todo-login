import React from 'react';
import { actionLogin } from '../redux/actionCreator';

const actionSubmitLogin = (e, dispatch) => {
	const userName = e.target.userName.value.trim();
	const userPassword = e.target.userPassword.value.trim();
	dispatch(
		actionLogin(userName, userPassword)
	);
}


export default ({ dispatch, error, isLoading }) => {
	return (
		<form onSubmit={e => {
			e.preventDefault();
			actionSubmitLogin(e, dispatch);
		}}>
			<h2>Login</h2>
			<div className="form-group">
				<label htmlFor="user_id">User Name:</label>
				<input className="form-control" name="userName" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<input className="form-control" name="userPassword"
					type="password"
				/>
			</div>
			{error &&
				<div className="alert alert-danger alert-dismissible fade show" role="alert">
					<strong>Error!</strong>{error}
  					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			}
			<div className="form-group">
				<button type="submit" className="btn btn-primary">{isLoading ? 'Loadingggg...' : 'Login'}</button>
			</div>
		</form>
	)
}