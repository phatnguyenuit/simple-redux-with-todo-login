import React from 'react';
import { Link } from 'react-router-dom';
import { authenticationAction, todoAction } from '../redux/action';

export default props => {
	const { dispatch, user } = props;
	const { name, icon } = user;

	const searchTodo = query => {
		dispatch(
			todoAction.actionSearchTodo(query)
		);
	}
	const handleSearch = e => {
		e.preventDefault();
		let query = e.target.searchTodo.value.trim();
		searchTodo(query);
	}
	const handleOnChange = e => {
		e.preventDefault();
		let query = e.target.value.trim();
		searchTodo(query);
	}
	const logout = e => {
		e.preventDefault();
		dispatch(
			authenticationAction.actionLogout()
		);
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<Link className="navbar-brand" to="/">
				<h3>Todo list</h3>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">About</Link>
					</li>
					{
						user &&
						<li className="nav-item dropdown">
							<span className="nav-link dropdown-toggle pointer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img src={icon} width={"30px"} height={"30px"} className="img img-thumbnail" alt="user_logo" />
								<span>{name}</span>
							</span>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/not-match">Not match</Link>
								<Link className="dropdown-item" to="/another-not-match">Another not match</Link>
								<div className="dropdown-divider" />
								<span className="dropdown-item btn btn-danger pointer" role="button"
									onClick={logout}>Log Out</span>
							</div>
						</li>
					}
				</ul>
				<form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
					<input className="form-control mr-sm-2" type="text" name="searchTodo" onChange={handleOnChange} />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
}