import React from 'react';
import TodoList from '../components/TodoList';
import FilterList from '../components/FilterList';
import TagList from '../components/TagList';
import {todos, tags, filters} from '../api/data';

export default () => (
	<div className="row" id="content">
		<div className="col-lg-2 col-sm-4" id="sidebar">
			<button onClick={() => { alert('create new todo') }} className="btn btn-primary">Create new todo</button>
			<div className="column">
				<span className="font-weight-bold">Filters</span>
				<FilterList filters={filters} />
			</div>
			<div className="column" id="tag">
				<span className="font-weight-bold">Tags</span>
				<TagList tags={tags} />
			</div>
			<div className="column priority">
				<span>Priorities</span>
				<select className="form-control">
					<option value="all">All</option>
				</select>
			</div>
			<div className="column order">
				<span>Order by</span>
				<select className="form-control">
					<option value="az">A to Z</option>
				</select>
			</div>
		</div>
		<div className="col-lg-10 col-sm-8 content">
			<h2 className="text-center">Your Todo List</h2>
			<TodoList todos={todos} />
		</div>
	</div>
)