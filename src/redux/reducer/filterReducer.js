/* Part 3: Filter Reducer */
import { ACTION_TOGGLE_FILTER } from '../constants';
import { filters } from '../../api/data';

const initialState = {
	filters,
	activeFilter: filters[0].name
}
export default ( prevState=initialState, action ) => {
	switch ( action.type) {
		case ACTION_TOGGLE_FILTER:{
			const { activeFilter } = action.payload;
			const { filters } = prevState;
			const updatedFilters = filters.map(filter => {
				let active = false;
				if (filter.name === activeFilter){
					active = true;
				}
				return {
					...filter,
					active
				}
			});
			return {
				...prevState,
				activeFilter,
				filters: updatedFilters
			}
		}
		default:
			return {
				...prevState,
			}
	}
}
