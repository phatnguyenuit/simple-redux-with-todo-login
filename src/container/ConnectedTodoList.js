import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { getTodosByFilter, getTodosByTag } from '../helper/todo'

const mapStateToProps = state => {
	const { visibleTodos } = state.todoReducer;
	const { activeFilter } = state.filterReducer;
	const { activeTag } = state.tagReducer;
	const filteredTodos = getTodosByFilter(visibleTodos, activeFilter);
	const new_visibleTodos = getTodosByTag( filteredTodos, activeTag);
	return {
		visibleTodos: new_visibleTodos,
	}
}
export default connect(mapStateToProps)(TodoList);