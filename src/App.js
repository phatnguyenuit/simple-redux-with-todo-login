import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import null_logo from './null_logo.png'

const App = () => (
	<div className="container-fluid">
		<div className="row header">
			<div className="col-xl-3">
				<img src={null_logo} width={"50px"} height={"50px"} className="img img-thumbnail" />
				<span>Nguyen Tan Phat</span>
			</div>
			<div className="col-xl-9">
				<div className="row">
				<div className="col-xl-6">
					<h1>Todo list</h1>
				</div>
				<div className="col-xl-6">
					<input placeholder="Search todo...." className="right mt16 form-control" />
				</div>
				</div>
			</div>
		</div>
		<div className="row content">
			<div className="col-xl-3 sidebar">
				<button onClick={() => { alert('create new todo') }} className="btn btn-primary">Create new todo</button>
				<div className="column">
					<span>Filters</span>
					<ul>
						<li>
							<a href="#">
								<span>icon</span>
								<span>Pending</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>icon</span>
								<span>Not done</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>icon</span>
								<span>Finished</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>icon</span>
								<span>Canceled</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="column tag">
					<span>Tags</span>
					<ul>
					<li>
						<a href="#">
							<span>tag_icon</span>
							<span>Frontend</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>tag_icon</span>
							<span>Backend</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>tag_icon</span>
							<span>API</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>tag_icon</span>
							<span>Issue</span>
						</a>
					</li>
					</ul>
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
			<div className="col-xl-9 content">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Sequence</th>
							<th>Description</th>
							<th>Tags</th>
							<th>Priority</th>
							<th>Assignee</th>
							<th>Action</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Learn Reactjs</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
)

export default App;
