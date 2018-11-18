import React from 'react';
import NavBar from '../components/NavBar';
import LoginPage from '../page/LoginPage';
import TodoPage from '../page/TodoPage';

import { connect } from 'react-redux';

const App = ({ dispatch, user }) => (
	<React.Fragment>
		<header>
			<NavBar user={user} dispatch={dispatch} />
		</header>
		<main className="container-fluid" role="main">
			{!user ?
				<LoginPage /> : <TodoPage />
			}
		</main>
		<footer id="footer">
			<div className="container">
				Copyright Phat Nguyen
			</div>
		</footer>
	</React.Fragment>
)

const mapStateToProps = state => {
	const { user } = state.loginReducer;
	return {
		user,
	}
}

export default connect(mapStateToProps)(App);
