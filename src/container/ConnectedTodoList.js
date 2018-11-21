import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { getTodosByFilter, getTodosByTag } from '../helper/todo'

const mapStateToProps = state => {
	const { todos } = state.todoReducer;
	const { activeFilter } = state.filterReducer;
	const { activeTag } = state.tagReducer;
	const filteredTodos = getTodosByFilter(todos, activeFilter);
	const visibleTodos = getTodosByTag( filteredTodos, activeTag);
	return {
		visibleTodos,
	}
}
export default connect(mapStateToProps)(TodoList);