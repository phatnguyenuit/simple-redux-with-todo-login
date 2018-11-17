import React from 'react';

export default ({ icon, name }) => (
	<li>
		<span>
			<span>{icon}</span>
			<span className="ml-2">{name}</span>
		</span>
	</li>
)