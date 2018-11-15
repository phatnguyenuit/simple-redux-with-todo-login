import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import null_logo from './null_logo.png'

const App = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-xl-4 col-sm-2">
			</div>
			<div className="col-xl-4 col-sm-8">
				<form action="#">
					<h2>Login</h2>
					<div className="form-group">
						<label htmlFor="user_id">User Name:</label>
						<input className="form-control" id="user_id" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input className="form-control" id="password" type="password" />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary mr-1">Login</button>
						<button type="button" className="btn btn-danger">Cancel</button>
					</div>
				</form>
			</div>
			<div className="col-xl-4 col-sm-2">
			</div>
		</div>
		<div className="row header">
			<div className="col-xl-2 col-sm-4">
				<img src={null_logo} width={"50px"} height={"50px"} className="img img-thumbnail" alt="user_logo" />
				<span>Nguyen Tan Phat</span>
			</div>
			<div className="col-xl-10 col-sm-8">
				<div className="row">
					<div className="col-xl-6 col-sm-6">
						<h1>Todo list</h1>
					</div>
					<div className="col-xl-6 col-sm-6 form-group">
						<input placeholder="Search todo...." className="right mt16 form-control" />
					</div>
				</div>
			</div>
		</div>
		<div className="row content">
			<div className="col-xl-2 col-sm-4 sidebar">
				<button onClick={() => { alert('create new todo') }} className="btn btn-primary">Create new todo</button>
				<div className="column">
					<span>Filters</span>
					<ul>
						<li>
							<a>
								<span>icon</span>
								<span>Pending</span>
							</a>
						</li>
						<li>
							<a>
								<span>icon</span>
								<span>Not done</span>
							</a>
						</li>
						<li>
							<a>
								<span>icon</span>
								<span>Finished</span>
							</a>
						</li>
						<li>
							<a>
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
							<a>
								<span>tag_icon</span>
								<span>Frontend</span>
							</a>
						</li>
						<li>
							<a>
								<span>tag_icon</span>
								<span>Backend</span>
							</a>
						</li>
						<li>
							<a>
								<span>tag_icon</span>
								<span>API</span>
							</a>
						</li>
						<li>
							<a>
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
			<div className="col-xl-10 col-sm-8 content">
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
					</tbody>
				</table>
			</div>
		</div>
	</div>
)

export default App;
