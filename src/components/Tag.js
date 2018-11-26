import React from 'react';
import { tagAction } from '../redux/action';

export default (props) => {
	const { dispatch, display, name, active } = props;
	return (
		<li>
			<span
				className={"mb-1 text-left badge badge-pill pointer " + (active ? "badge-success" : "badge-secondary")}
				onClick={e => {
					e.preventDefault();
					dispatch(
						tagAction.actionToggleTag(name)
					);
				}}
			>
				<span>{display}</span>
			</span>
		</li>
	)
}