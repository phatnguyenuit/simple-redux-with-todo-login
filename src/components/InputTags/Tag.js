import React from 'react';

export default (props) => {
	const { value, onDelete } = props;
	return (
		<span className="badge badge-pill badge-success mr-1">{value}
			<span className="remove" onClick={onDelete}/>
		</span>
	)
};