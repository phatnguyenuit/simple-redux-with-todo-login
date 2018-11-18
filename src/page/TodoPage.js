import React from 'react';
import ConnectedTodoList from '../container/ConnectedTodoList';
import AddToDo from '../container/AddToDo';
import FilterList from '../components/FilterList';
import TagList from '../components/TagList';
import { tags, filters } from '../api/data';

export default () => (
	<div className="row" id="content">
		<div className="col-lg-2 col-sm-4" id="sidebar">
			<AddToDo />
			<div className="column">
				<span className="font-weight-bold">Filters</span>
				<FilterList filters={filters} />
			</div>
			<div className="column" id="tag">
				<span className="font-weight-bold">Tags</span>
				<TagList tags={tags} />
			</div>
			<div className="column" id="priority">
				<span>Priorities</span>
				<select className="form-control">
					<option value="all">All</option>
				</select>
			</div>
			<div className="column" id="order">
				<span>Order by</span>
				<select className="form-control">
					<option value="az">A to Z</option>
				</select>
			</div>
		</div>
		<div className="col-lg-10 col-sm-8" id="content">
			<h2 className="text-center">Your Todo List</h2>
			<ConnectedTodoList />
		</div>
	</div>
)