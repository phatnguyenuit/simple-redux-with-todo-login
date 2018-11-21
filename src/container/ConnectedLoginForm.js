import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
const mapStateToProps = state => {
	const { error, isLoading } = state.authenticationReducer;
	return {
		error,
		isLoading,
	}
}
export default connect(mapStateToProps)(LoginForm);