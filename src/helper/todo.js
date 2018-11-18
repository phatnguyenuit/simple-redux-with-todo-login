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

export const getTodosByTag = (todos, tag='') => {
	if (!tag) return todos;
	return todos.filter( 
		todo => todo.tags.includes(tag)
	);
}

export const getTodosByOrder = (todos, order='') => {
	if (!order || order === 'all') return todos;
	return todos.filter( 
		todo => todo.tags.includes(order)
	);
}

