/* Part 2: Todo action creator */
import { uniqueId } from 'lodash';
import {
	ACTION_ADD_TODO,
	ACTION_SEARCH_TODO,
	ACTION_LOAD_TODO,
} from '../constants'

//Fake user
import { prefixIdTodo } from '../../api/data';

export const actionAddTodo = ( values ) => {
	const { description } = values;
	let todo = false;
	if (description) {
		todo = {
			id: uniqueId(prefixIdTodo),
			status: 'not_start',
			...values
		}
	}
	return {
		type: ACTION_ADD_TODO,
		payload: {
			todo
		}
	}
}

export const actionSearchTodo = ( query ) => {
	return {
		type: ACTION_SEARCH_TODO,
		payload: {
			query
		}
	}
}

export const actionLoadTodo = ( user_id ) => {
	return {
		type: ACTION_LOAD_TODO,
		payload: {
			user_id
		}
	}
}