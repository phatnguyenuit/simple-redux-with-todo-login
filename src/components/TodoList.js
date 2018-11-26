import React from 'react';
import Todo from './Todo';
export default ({ visibleTodos }) => {
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
						visibleTodos.map(todo => <Todo key={todo.id}  {...todo}/>)
					}
				</tbody>
			</table>
		</div>
	);
}
