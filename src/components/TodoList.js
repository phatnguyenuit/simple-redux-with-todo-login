import React from 'react';
import ConnectedTodo from '../container/ConnectedTodo';
export default ({ visibleTodos, dispatch }) => {
	// console.log(visibleTodos);
	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Description</th>
						<th>Tags</th>
						<th>Priority</th>
						<th>Action</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{
						visibleTodos.map(todo => <ConnectedTodo key={todo.id} dispatch={dispatch} {...todo}/>)
					}
				</tbody>
			</table>
		</div>
	);
}
