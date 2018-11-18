import React from 'react';
import { prefixIdTodo } from '../api/data';
import { filters, tags } from '../api/data';

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
	const tagsDisplayArr = tags.map( tag => tagDict[tag]);
	const tagsStr = tagsDisplayArr.join(", ");
	return (
		<tr>
			<th scope="row">{sequence}</th>
			<td>{description}</td>
			<td>{tagsStr}</td>
			<td></td>
			<td></td>
			<td></td>
			<td data-status={status}>{statusStr}</td>
		</tr>
	)
}