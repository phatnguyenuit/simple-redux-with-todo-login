import React from 'react';
import ConnectedTag from '../container/ConnectedTag';

export default ({ tags }) => {
	return (
		<ul className="list-unstyled ml-3">
			{
				tags.map(tag => <ConnectedTag key={tag.id} {...tag} />)
			}
		</ul>
	)
}