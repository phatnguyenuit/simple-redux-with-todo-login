import { combineReducers } from 'redux';
import { 
	// login
	ACTION_LOGIN_PENDING, 
	ACTION_LOGIN_SUCCESS,
	ACTION_LOGIN_FAIL,
	ACTION_LOGOUT,
	// todo
	ACTION_ADD_TODO,
	// filter
	ACTION_TOGGLE_FILTER,
	//  tag
	ACTION_TOGGLE_TAG,
} from './constants'
import { todos, filters, tags } from '../api/data';

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

export const loginReducer = (prevState=initialLoginState, action) => {
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

export const todoReducer = (prevState=initialTodoState, action) => {
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

/* Part 3: Filter Reducer */
const initFilterState = {
	filters,
	activeFilter: filters[0].name
}
export const filterReducer = ( prevState=initFilterState, action ) => {
	switch ( action.type) {
		case ACTION_TOGGLE_FILTER:{
			const { activeFilter } = action.payload;
			const { filters } = prevState;
			const updatedFilters = filters.map(filter => {
				let active = false;
				if (filter.name === activeFilter){
					active = true;
				}
				return {
					...filter,
					active
				}
			});
			return {
				...prevState,
				activeFilter,
				filters: updatedFilters
			}
		}
		default:
			return {
				...prevState,
			}
	}
}

/* Part 4: Tag Reducer */
const initTagState = {
	tags,
	activeTag: ''
}
export const tagReducer = ( prevState=initTagState, action ) => {
	switch ( action.type) {
		case ACTION_TOGGLE_TAG:{
			const { activeTag } = action.payload;
			const prevActiveTag = prevState.activeTag;
			const { tags } = prevState;
			const updatedTags = tags.map(tag => {
				let active = false;
				if (tag.name == activeTag && !tag.active){
					active = true;
				}
				return {
					...tag,
					active
				}
			});
			return {
				...prevState,
				activeTag: prevActiveTag == activeTag ? '' : activeTag,
				tags: updatedTags
			}
		}
		default:
			return {
				...prevState,
			}
	}
}

export default combineReducers({
	loginReducer,
	todoReducer,
	filterReducer,
	tagReducer,
});