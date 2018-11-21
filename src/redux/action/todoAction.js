/* Part 2: Todo action creator */
import { uniqueId } from 'lodash';
import {
	ACTION_ADD_TODO,
} from '../constants'

//Fake user
import { prefixIdTodo } from '../../api/data';

export const actionAddTodo = ( description ) => {
	let todo = false;
	if (description) {
		todo = {
			id: uniqueId(prefixIdTodo),
			description,
			status: 'not_start',
			tags: []
		}
	}
	return {
		type: ACTION_ADD_TODO,
		payload: {
			todo
		}
	}
}