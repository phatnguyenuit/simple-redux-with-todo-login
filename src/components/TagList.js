import React from 'react';
import Tag from './Tag';

export default (props) => {
	const { tags, dispatch } = props;
	return (
		<ul className="list-unstyled ml-3">
			{
				tags.map(tag => <Tag key={tag.id} dispatch={dispatch} {...tag} />)
			}
		</ul>
	)
}