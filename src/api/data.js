import null_icon from '../static/img/null_icon.png';
import { uniqueId } from 'lodash';

export const prefixIdTodo = 'TODO_';
export const todos = [
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn React',
		status: 'finished',
		tags: ['frontend', 'api']
	},
	
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn Java',
		status: 'finished',
		tags: ['backend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		description: 'Learn Angular 4',
		status: 'not_start',
		tags: ['frontend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		description: 'Code login feature',
		status: 'canceled',
		tags: ['backend', 'api']
	},
	{
		id: uniqueId(prefixIdTodo),
		description: 'Sleeping...',
		status: 'pending',
		tags: ['issue']
	},
]


export const tags = [
	{
		id: 1,
		icon: 'tag_icon',
		name: 'frontend',
		display: 'Frontend',
		active: false,
	},
	
	{
		id: 2,
		icon: 'tag_icon',
		name: 'backend',
		display: 'Backend',
		active: false,
	},
	{
		id: 3,
		icon: 'tag_icon',
		name: 'api',
		display: 'API',
		active: false,
	},
	
	{
		id: 4,
		icon: 'tag_icon',
		name: 'issue',
		display: 'Issue',
		active: false,
	},


]

const prefixIdFilter = 'FILTER_';
export const filters = [
	{
		id: uniqueId(prefixIdFilter),
		icon: 'filter_icon',
		name: 'all',
		display: 'All',
		active: true,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'fa-spiner',
		name: 'pending',
		display: 'Pending',
		active: false,
	},
	
	{
		id: uniqueId(prefixIdFilter),
		icon: 'filter_icon',
		name: 'not_start',
		display: 'Not start',
		active: false,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'filter_icon',
		name: 'finished',
		display: 'Finished',
		active: false,
	},
	{
		id: uniqueId(prefixIdFilter),
		icon: 'filter_icon',
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