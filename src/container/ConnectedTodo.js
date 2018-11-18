import { connect } from 'react-redux';
import Todo from '../components/Todo';

const mapStateToProps = (state, ownProps) => {
	const { visibleTodos } = state.todoReducer;
	const status = visibleTodos.filter( todo => todo.id === ownProps.id)[0].status;
	return {
		status,
	}
}
export default connect(mapStateToProps)(Todo);