import React, { Component } from 'react';
import Tag from './Tag';
import './style.css';

class InputTags extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			value: '',
			suggestedTags: [],
		}
	}

	handleKeyDown = e => {
		const { tags } = this.state;
		const inputValue = e.target.value;
		switch (e.keyCode) {
			// enter
			case 13: {
				this.setState({
					value: '',
					tags: [...tags, inputValue],
					suggestedTags: [],
				});
				break;
			}
			// backspace
			case 8: {
				if (inputValue === '') {
					this.removeLastestItem();
				}
				break;
			}
			default: {
				this.handleChange(e);
				break;
			}
		}
	}

	removeLastestItem() {
		const { tags } = this.state;
		this.setState({
			value: '',
			tags: tags.slice(0, -1)
		})
	}

	handleChange = e => {
		const inputValue = e.target.value;
		const {dataSource = []} = this.props;
		let newSuggestedTags = [];
		if ( inputValue ) {
			newSuggestedTags = dataSource.filter( tag => tag.includes(inputValue));
		}
		this.setState({
			value: inputValue,
			suggestedTags: newSuggestedTags
		});
	}

	handleDelete = tag => e => {
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

	handleAutoComplete = tag => e => {
		const { tags } = this.state;
		if (tags.indexOf(tag) < 0) {
			this.setState({
				tags: [...tags, tag],
				suggestedTags: [],
				value: '',
			})
		}
		else {
			this.setState({
				suggestedTags: [],
				value: '',
			})
		}
	}

	handleFocus = e => {
		const childInput = e.target.firstElementChild;
		if ( childInput ) {
			childInput.focus();
		}
	}

	render() {
		const { value, tags, suggestedTags } = this.state;
		return (
			<div className="tags" onClick={this.handleFocus}>
				<div className="input-tags">
				{
					tags.map(tag =>
						<Tag key={tag}
							value={tag}
							handleDelete={this.handleDelete(tag)}
						/>
					)
				}
				<input value={value} 
					onChange={this.handleChange} 
					onKeyDown={this.handleKeyDown} 
				/>
				</div>
				{suggestedTags && 
					<ul className="auto-complete list-unstyled mt-2" id="suggestion">
					{
						suggestedTags.map((tag, index) => {
							let className = "item-suggested";
							if (index === 0) {
								className += " selected";
							}
							return (
								<li key={"auto-" + tag} className={className} id={"auto-" + tag}
									onClick={this.handleAutoComplete(tag)}>{tag}
								</li>
							)

						})
					}
					</ul>
				}
			</div>
		)
	}
}

export default InputTags;