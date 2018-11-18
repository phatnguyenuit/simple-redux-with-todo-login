import React from 'react';
import { actionToggleFilter } from '../redux/actionCreator';
import { Icon } from 'react-fa';

export default ({ dispatch, name, icon, display, active }) => {
	// console.log('Render filter item');
	return (
		<li>
			<button
				className={"btn btn-block mb-1 text-left " + (active ? "btn-success" : "btn-default")}
				onClick={e => {
					e.preventDefault();
					dispatch(actionToggleFilter(name));
				}}
			>
				<Icon name={icon} />
				<span className="ml-2">{display}</span>
			</button>
		</li>
	)
}