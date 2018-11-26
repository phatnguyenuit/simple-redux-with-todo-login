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
		todo => {
			if (todo.tags.length < tags.length) {
				return tags.includes(...todo.tags)
			}
			return todo.tags.includes(...tags)
		}
	);
}

export const getTodosByOrder = (todos, order='') => {
	if (!order || order === 'all') return todos;
	return todos.filter( 
		todo => todo.tags.includes(order)
	);
}

