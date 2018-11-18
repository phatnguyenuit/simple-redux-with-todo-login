import { combineReducers } from 'redux';
import { 
	// login
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
	ACTION_LOGOUT,
	// todo
	ACTION_LOAD_TODO,
	ACTION_ADD_TODO,
} from './constants'
import { todos } from '../api/data';

// Boottrap js lib
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/* Part 1: Login reducer  */
const initialLoginState = {
	user: false,
	error: '',
	isLoading: false,
}

const loginReducer = (prevState=initialLoginState, action) => {
	switch (action.type) {
		case ACTION_LOGIN_PENDING:
			return {
				...prevState,
				isLoading: true
			}
		case ACTION_LOGIN_SUCCESS:{
			let {user} = action.payload;
			return {
				...prevState,
				user,
				isLoading: false,
				error: '',
			}
		}
		case ACTION_LOGIN_FAIL:{
			let {error} = action.payload;
			return {
				...prevState,
				error,
				isLoading: false,
				user: false,
			}
		}
		case ACTION_LOGOUT:{
			return {
				...prevState,
				error: '',
				isLoading: false,
				user: false,
			}
		}
		default:
			return {
				...prevState
			}
	}
}

/* Part 2: Todo reducer  */
const initialTodoState = {
	todoIds: todos.map(todo => todo.id),
	visibleTodoIds: todos.map(todo => todo.id),
	todos: [...todos],
	visibleTodos: [...todos],
	error: '',
}

const getTodos = (todos, todoIds) => {
	return todos.filter( todo => todoIds.indexOf(todo.id));
}

const todoReducer = (prevState=initialTodoState, action) => {
	switch (action.type) {
		case ACTION_LOAD_TODO:{
			const { visibleTodoIds } = action.payload;
			const { todos } = prevState;
			const filteredTodos = getTodos(todos, visibleTodoIds)
			return {
				...prevState,
				visibleTodoIds,
				visibleTodos: filteredTodos
			}
		}
		case ACTION_ADD_TODO:{
			const { todo } = action.payload;
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
				}
			}
			else {
				return {
					...prevState,
					error: 'Todo description is not allowed to be empty!'
				}
			}
		}
		default:
			return {
				...prevState
			}
	}
}

export default combineReducers({
	loginReducer,
	todoReducer,
});