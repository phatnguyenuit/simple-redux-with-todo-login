import React from 'react';
import { Icon } from 'react-fa';
import { capitalize, uniqueId } from 'lodash';
import { prefixIdTodo, filters } from '../api/data';


const filterDict = filters.reduce(
	(fd, filter) => ({
		...fd,
		[filter.name]: {icon: filter.icon, displayStr: filter.display}
	}),
	{}
);

const priority_classes = {
	very_low: 'text-muted',
	low: 'text-info',
	normal: 'text-primary',
	high: 'text-warning',
	very_high: 'text-danger'
}

export default (props) => {
	const { id, description, tags, priority, status } = props;
	const sequence = id.split(prefixIdTodo)[1];
	const { icon } = filterDict[status];
	const className = priority_classes[priority];
	return (
		<tr>
			<th scope="row">{sequence}</th>
			<td>{description}</td>
			<td>{
				tags.map(tag => 
					<span 
						className="text-left badge badge-pill badge-secondary mr-1" 
						key={uniqueId(tag)}>{tag}
					</span>
				)
			}</td>
			<td className={className}>{capitalize(priority).replace('_', ' ')}</td>
			<td>
				<div className="form-inline">
				<div className="form-group">
					<button className="btn btn-outline-danger mx-2 my-sm-0">Edit</button>
				</div>
				<div className="form-group">
					<select className="form-control" id="sel1">
						<option value="">Change Status</option>
						{
							Object.keys(filterDict).map(status => status !== 'all' && 
								<option value={status} key={status}>{filterDict[status]['displayStr']}</option>
							)
						}
					</select>
				</div>
				</div>
			</td>
			<td data-status={status}><Icon name={icon} /></td>
		</tr>
	)
}