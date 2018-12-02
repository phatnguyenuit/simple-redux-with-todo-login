import React from 'react';
import TodoDisplay from './TodoDisplay';
import TodoEditable from './TodoEditable';

import { prefixIdTodo, filters } from '../../api/data';
import { todoAction, tagAction } from '../../redux/action'


const statusDict = filters.reduce(
	(sd, filter) => ({
		...sd,
		[filter.name]: { ...filter }
	}),
	{}
);

const statusOptions = filters.map(
	filter => {
		const { name: value, display: name } = filter;
		return {
			name,
			value
		}
	}
)

const priority_classes = {
	very_low: 'bg-muted',
	low: 'bg-info',
	normal: 'bg-primary',
	high: 'bg-warning',
	very_high: 'bg-danger'
}



export default class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editable: false
		}
	}
	toggleEditable(){
		const { editable } = this.state;
		this.setState({
			editable: !editable
		});
	}
	handleEdit = e => {
		e.preventDefault();
		this.toggleEditable();
	}
	handleSave = (id, values) =>{
		const { dispatch } = this.props;
		this.toggleEditable();
		dispatch(
			todoAction.actionUpdateTodo(id, values)
		);
		dispatch(
			tagAction.actionAddTag(values.tags)
		)
	}
	handleCancel = () =>{
		this.toggleEditable();
	}
	render(){
		const { editable } = this.state;
		const { id, description, tags, priority, status, dispatch } = this.props;
		const sequence = id.split(prefixIdTodo)[1];
		const { icon } = statusDict[status];
		const className = priority_classes[priority];
		const childProps = {
			id,
			sequence,
			description,
			tags,
			priority,
			status,
			className,
			icon,
			dispatch,
			statusOptions,
			handleEdit: this.handleEdit,
			handleSave: this.handleSave,
			handleCancel: this.handleCancel,
		}
		const renderComponent = editable ? <TodoEditable {...childProps} /> : <TodoDisplay {...childProps} />
		return renderComponent;
	}
}