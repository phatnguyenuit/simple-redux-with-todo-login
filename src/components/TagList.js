import React from 'react';
import Tag from './Tag'

export default ({ tags }) => {
	return (
		<ul className="list-unstyled ml-3">
			{
				tags.map(tag => <Tag key={tag.id} {...tag} />)
			}
		</ul>
	)
}