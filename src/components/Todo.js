import React from 'react';
import { prefixIdTodo } from '../api/data'

export default ({id, description}) => {
	const sequence = id.split(prefixIdTodo)[1];
	return (
		<tr>
			<th scope="row">{sequence}</th>
			<td>{description}</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	)
}