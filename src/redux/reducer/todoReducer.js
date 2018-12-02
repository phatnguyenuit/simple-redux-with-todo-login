/* Part 2: Todo reducer  */
import { 
	ACTION_LOAD_TODO, 
	ACTION_ADD_TODO, 
	ACTION_SEARCH_TODO,
} from '../constants';
import { todos } from '../../api/data';

// Boottrap js lib
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const initialState = {
	todoIds: [],
	visibleTodoIds: [],
	todos: [],
	visibleTodos: [],
	error: '',
	reset: false,
}

export default (prevState=initialState, action) => {
	switch (action.type) {
		case ACTION_LOAD_TODO: {
			const { user_id } = action.payload;
			const userTodos = todos.filter( todo => todo.user_id === user_id);
			return {
				...prevState,
				todoIds: userTodos.map(todo => todo.id),
				visibleTodoIds: userTodos.map(todo => todo.id),
				todos: [...userTodos],
				visibleTodos: [...userTodos],
			}
		}
		case ACTION_ADD_TODO:{
			const { todo } = action.payload;
			const { reset } = prevState;
			if ( todo ) {
				const { todoIds, todos, visibleTodoIds, visibleTodos } = prevState;
				$('#addTodoModal').modal('hide');
				return {
					...prevState,
					todoIds: [
						...todoIds,
						todo.id
					],
					visibleTodoIds: [
						...visibleTodoIds,
						todo.id
					],
					todos: [
						...todos,
						todo
					],
					visibleTodos: [
						...visibleTodos,
						todo
					],
					error: '',
					reset: !reset,
				}
			}
			else {
				return {
					...prevState,
					error: 'Todo description is not allowed to be empty!'
				}
			}
		}
		case ACTION_SEARCH_TODO: {
			const { query } = action.payload;
			const { todos, reset } = prevState;
			const searchedTodos = !query ? todos : todos.filter( todo => todo.description.toLowerCase().includes(query.toLowerCase()));
			return {
				...prevState,
				visibleTodoIds: searchedTodos.map(todo => todo.id),
				visibleTodos: [...searchedTodos],
				reset: !reset,
			}
		}
		default:
			return {
				...prevState,
			}
	}
}