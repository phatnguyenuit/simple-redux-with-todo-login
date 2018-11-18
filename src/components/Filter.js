import React from 'react';
import { actionToggleFilter } from '../redux/actionCreator';
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
				<span className={"fa " + icon} />
				<span className="ml-2">{display}</span>
			</button>
		</li>
	)
}