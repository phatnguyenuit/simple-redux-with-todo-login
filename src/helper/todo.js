export const getTodosByIds = (todos, todoIds=[]) => {
	if (!todoIds) return todos;
	return todos.filter( 
		todo => todoIds.indexOf(todo.id)
	);
}

export const getTodosByFilter = (todos, filter=false) => {
	if (!filter || filter === 'all') return todos;
	return todos.filter( 
		todo => todo.status === filter
	);
}

export const getTodosByTags = (todos, tags=[]) => {
	if (!tags.length) return todos;
	return todos.filter( 
		todo => tags.every(
			tag => todo.tags.includes(tag)
		)
	);
}

export const getTodosByOrder = (todos, order='') => {
	if (!order || order === 'all') return todos;
	return todos.filter( 
		todo => todo.tags.includes(order)
	);
}

