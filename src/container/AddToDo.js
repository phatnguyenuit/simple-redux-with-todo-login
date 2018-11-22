import React from 'react'
import { connect } from 'react-redux'
import { todoAction } from '../redux/action'

const handleAddTodo = (descriptionEle, dispatch) => {
	let description = descriptionEle.value.trim();
	descriptionEle.value = '';
	dispatch(
		todoAction.actionAddTodo(description)
	);
}

const mapStateToProps = state => {
	const { error } = state.todoReducer;
	return {
		error,
	}
}

const AddToDo = ({ dispatch, error }) => {
	let descriptionEle;
	return (
		<>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addTodoModal">Create new todo</button>
			
			{/* Modal */}
			<div className="modal fade" id="addTodoModal" tabIndex="-1" role="dialog" aria-labelledby="addTodoModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addTodoModalLabel">Add ToDo</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group text-left">
									<label htmlFor="description" className="col-form-label text-left">Description:</label>
									<textarea className="form-control" id="description" ref={description => descriptionEle = description} />
								</div>
								{error &&
									<div className="alert alert-danger fade show" role="alert">
										<strong>Error!</strong>{error}
									</div>
								}
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" onClick={
								e => {
									e.preventDefault();
									handleAddTodo(descriptionEle, dispatch);
								}
							}>Add</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default connect(mapStateToProps)(AddToDo);