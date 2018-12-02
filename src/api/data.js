import null_icon from '../static/img/null_icon.png';
import { uniqueId } from 'lodash';

export const prefixIdTodo = 'TODO_';
export const todos = [
	{
		id: uniqueId(prefixIdTodo),
		user_id: 1,
		description: 'Learn React',
		status: 'finished',
		priority: 'very_high',
		tags: ['frontend', 'api'],
	},
	
	{
		id: uniqueId(prefixIdTodo),
		user_id: 1,
		description: 'Learn Java',
		status: 'finished',
		priority: 'low',
		tags: ['backend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		user_id: 1,
		description: 'Learn Angular 4',
		status: 'not_start',
		priority: 'normal',
		tags: ['frontend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		user_id: 1,
		description: 'Code login feature',
		status: 'canceled',
		priority: 'low',
		tags: ['backend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		user_id: 2,
		description: 'Sleeping...',
		status: 'pending',
		priority: 'very_low',
		tags: ['issue']
	},
]

export const prefixIdTag = 'TAG_';
export const tags = [
	{
		id: uniqueId(prefixIdTag),
		name: 'frontend',
		active: false,
	},
	
	{
		id: uniqueId(prefixIdTag),
		name: 'backend',
		active: false,
	},
	{
		id: uniqueId(prefixIdTag),
		name: 'api',
		active: false,
	},
	
	{
		id: uniqueId(prefixIdTag),
		name: 'issue',
		active: false,
	},


]

const prefixIdFilter = 'FILTER_';
export const filters = [
	{
		id: uniqueId(prefixIdFilter),
		icon: 'indent',
		name: 'all',
		display: 'All',
		active: true,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'spinner',
		name: 'pending',
		display: 'Pending',
		active: false,
	},
	
	{
		id: uniqueId(prefixIdFilter),
		icon: 'anchor',
		name: 'not_start',
		display: 'Not start',
		active: false,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'check-square',
		name: 'finished',
		display: 'Finished',
		active: false,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'trash',
		name: 'canceled',
		display: 'Canceled',
		active: false,
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

export const priorityValues = [
	{
		value: 'normal',
		name: 'Normal',
	},
	{
		value: 'low',
		name: 'Low',
	},
	{
		value: 'very_low',
		name: 'Very Low',
	},
	{
		value: 'high',
		name: 'High',
	},
	{
		value: 'very_high',
		name: 'Very High',
	},

]