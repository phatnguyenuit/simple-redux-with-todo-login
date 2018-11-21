/* Part 2: Todo reducer  */
import { ACTION_ADD_TODO } from '../constants'
import { todos } from '../../api/data'

// Boottrap js lib
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const initialTodoState = {
	todoIds: todos.map(todo => todo.id),
	visibleTodoIds: todos.map(todo => todo.id),
	todos: [...todos],
	visibleTodos: [...todos],
	error: '',
}

export default (prevState=initialTodoState, action) => {
	switch (action.type) {
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