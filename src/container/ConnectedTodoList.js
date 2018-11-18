import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
	const { visibleTodos } = state.todoReducer;
	return {
		visibleTodos,
	}
}
export default connect(mapStateToProps)(TodoList);