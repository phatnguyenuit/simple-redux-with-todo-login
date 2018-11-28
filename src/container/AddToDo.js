import React from 'react';
import { connect } from 'react-redux';
import { todoAction } from '../redux/action';
import InputTags from '../components/InputTags/';

const handleAddTodo = (dispatch) => e => {
	e.preventDefault();
	let formTodo = document.forms.namedItem('addTodoForm');

	let descriptionEle = formTodo.description;
	let description = descriptionEle.value.trim();
	descriptionEle.value = '';

	let priorityEle = formTodo.priority;
	let priority = priorityEle.value.trim();
	priorityEle.value = '';

	dispatch(
		todoAction.actionAddTodo({description, priority})
	);
}

const mapStateToProps = state => {
	const { error } = state.todoReducer;
	return {
		error,
	}
}

const AddToDo = ({ dispatch, error }) => {
	return (
		<>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addTodoModal">Create new todo</button>
			
			{/* Modal */}
			<div className="modal fade" id="addTodoModal" tabIndex="-1" role="dialog" aria-labelledby="addTodoModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addTodoModalLabel">Add ToDo</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form id="addTodoForm" onSubmit={e => e.preventDefault()}>
								<div className="form-group text-left">
									<label htmlFor="description" className="col-form-label text-left">Description:</label>
									<textarea className="form-control" id="description" name="description" />
								</div>
								<div className="form-group text-left">
									<label htmlFor="priority" className="col-form-label text-left">Priority:</label>
									<select className="form-control" id="priority" name="priority">
										<option value="normal">Normal</option>
										<option value="low">Low</option>
										<option value="very_low">Very Low</option>
										<option value="high">High</option>
										<option value="very_high">Very High</option>
									</select>
								</div>
								<div className="form-group text-left">
									<label htmlFor="tags" className="col-form-label text-left">Tags:</label>
									<InputTags dataSource={['test', 'tau', 'toi']}/>
								</div>
								{error &&
									<div className="alert alert-danger fade show" role="alert">
										<strong>Error!</strong>{error}
									</div>
								}
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" 
								onClick={handleAddTodo(dispatch)}
							>Add</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default connect(mapStateToProps)(AddToDo);