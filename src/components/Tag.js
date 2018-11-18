import React from 'react';
import { actionToggleTag } from '../redux/actionCreator';

export default ({ dispatch, icon, display, name, active }) => {
	return (
		<li>
			<button
				className={"btn btn-block mb-1 text-left " + (active ? "btn-success" : "btn-default")}
				onClick={e => {
					e.preventDefault();
					dispatch(actionToggleTag(name));
				}}
			>
				<span className={"fa " + icon} />
				<span className="ml-2">{display}</span>
			</button>
		</li>
	)
}