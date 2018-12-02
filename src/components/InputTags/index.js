import React, { Component } from 'react';
import Tag from './Tag';
import './style.css';

class InputTags extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			value: '',
		}
	}
	
	componentDidUpdate() {
		const { tags, value } = this.state;
		const values = tags.length ? tags : [value];
		this.props.setTagValues(values);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.reset !== this.props.reset) {
			this.setState({
				value: '',
				tags: [],
			});
		}
	}

	removeLastestItem() {
		const { tags } = this.state;
		this.setState({
			value: '',
			tags: tags.slice(0, -1)
		})
	}
	
	// Event Handlers
	handleClickTags = e => {
		// Make the within input focus
		const childInput = e.target.firstElementChild;
		if ( childInput ) {
			childInput.focus();
		}
	}

	hanldeInputEvents = e => {
		switch (e.type) {
			case 'change':
				return this.handleInputChange(e);
			case 'keydown': {
				return this.handleInputKeyDown(e);
			}
			default:
				break;
		}
	}
	handleInputKeyDown = e => {
		const { tags } = this.state;
		const inputValue = e.target.value;
		switch (e.key) {
			case "Enter": {
				this.setState({
					value: '',
					tags: [...tags, inputValue],
					suggestedTags: [],
				});
				break;
			}
			case "Backspace": {
				if (inputValue === '') {
					this.removeLastestItem();
				}
				break;
			}
			default: {
				this.handleInputChange(e);
				break;
			}
		}
	}

	handleInputChange = e => {
		const inputValue = e.target.value;
		this.setState({
			value: inputValue,
		});
	}

	handleDeleteTag = tag => e => {
		e.preventDefault();
		const { tags } = this.state;
		const deleteIndex = tags.indexOf(tag);
		if (deleteIndex > -1) {
			this.setState({
				tags: [
					...tags.slice(0, deleteIndex),
					...tags.slice(deleteIndex + 1),
				]
			})
		}
	}

	render() {
		const { value, tags } = this.state;
		return (
			<div className="tags" onClick={this.handleClickTags}>
				<div className="input-tags">
				{
					tags.map(tag =>
						<Tag key={tag}
							value={tag}
							onDelete={this.handleDeleteTag(tag)}
						/>
					)
				}
				<input value={value} 
					onChange={this.hanldeInputEvents} 
					onKeyDown={this.hanldeInputEvents} 
				/>
				</div>
			</div>
		)
	}
}

export default InputTags;