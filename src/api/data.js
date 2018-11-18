import null_icon from '../static/img/null_icon.png';
import { uniqueId } from 'lodash';

export const prefixIdTodo = 'TODO_';
export const todos = [
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn React'
	},
	
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn Java'
	},
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn Angular 4'
	},
	{
		id: uniqueId(prefixIdTodo),
		description: 'Code login feature'
	},

]


export const tags = [
	{
		id: 1,
		icon: 'tag_icon',
		name: 'Frontend'
	},
	
	{
		id: 2,
		icon: 'tag_icon',
		name: 'Backend'
	},
	{
		id: 3,
		icon: 'tag_icon',
		name: 'API'
	},
	
	{
		id: 4,
		icon: 'tag_icon',
		name: 'Issue'
	},


]

export const filters = [
	{
		id: 1,
		icon: 'filter_icon',
		name: 'Pending'
	},
	
	{
		id: 2,
		icon: 'filter_icon',
		name: 'Not start'
	},
	{
		id: 3,
		icon: 'filter_icon',
		name: 'Finished'
	},
	{
		id: 4,
		icon: 'filter_icon',
		name: 'Canceled'
	},

]

export const users = [
	{
		id: 1,
		icon: null_icon,
		name: 'Nguyen Tan Phat',
		login: 'phatnguyen',
		password: 'phatnguyen',
	},
	
	{
		id: 2,
		icon: null_icon,
		name: 'Nguyen Tan Tai',
		login: 'tainguyen',
		password: 'tainguyen',
	},
]