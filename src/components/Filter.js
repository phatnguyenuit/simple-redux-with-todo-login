import React from 'react';
import { filterAction } from '../redux/action';
import { Icon } from 'react-fa';

export default (props) => {
	// console.log('Render filter item');
	const { dispatch, name, icon, display, active } = props;
	return (
		<li>
			<button
				className={"btn btn-block mb-1 text-left " + (active ? "btn-success" : "btn-default")}
				onClick={e => {
					e.preventDefault();
					dispatch(
						filterAction.actionToggleFilter(name)
					);
				}}
			>
				<Icon name={icon} />
				<span className="ml-2">{display}</span>
			</button>
		</li>
	)
}