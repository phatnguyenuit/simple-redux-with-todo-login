import React from 'react';
import Filter from './Filter';

export default ({ filters }) => {
	return (
		<ul className="list-unstyled ml-3">
			{
				filters.map(filter => <Filter key={filter.id} {...filter} />)
			}
		</ul>
	)
}