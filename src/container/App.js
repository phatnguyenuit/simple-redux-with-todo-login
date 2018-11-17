import React from 'react';
import NavBar from '../components/NavBar';
import LoginPage from '../page/LoginPage';
import TodoPage from '../page/TodoPage';

import { connect } from 'react-redux';

const App = ({ user }) => (
	<div className="container-fluid">
		<NavBar user={user} />
		{!user ? 
			<LoginPage /> : <TodoPage />
		}
	</div>
)

const mapStateToProps = state => {
	const { user } = state.loginReducer;
	return {
		user,
	}
}

export default connect(mapStateToProps)(App);
