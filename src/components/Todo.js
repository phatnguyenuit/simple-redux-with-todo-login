import React from 'react';
import { prefixIdTodo } from '../api/data';
import { filters, tags } from '../api/data';

import { uniqueId } from 'lodash'

const filterDict = filters.reduce(
	(fd, filter) => ({
		...fd, 
		[filter.name]:filter.display
	}),
	{}
);

const tagDict = tags.reduce(
	(td, tag) => ({
		...td, 
		[tag.name]:tag.display
	}),
	{}
);

export default ({id, description, status, tags}) => {
	const sequence = id.split(prefixIdTodo)[1];
	const statusStr = filterDict[status];
	return (
		<tr>
			<th scope="row">{sequence}</th>
			<td>{description}</td>
			<td>{
				tags.map(tag =>  <span className="text-left badge badge-pill badge-secondary mr-1" key={uniqueId(tag)}>{tagDict[tag]}</span>)
			}</td>
			<td></td>
			<td></td>
			<td></td>
			<td data-status={status}>{statusStr}</td>
		</tr>
	)
}