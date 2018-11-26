/* Part 4: Tag Reducer */
import { 
	ACTION_TOGGLE_TAG,
} from '../constants';
import { tags } from '../../api/data';

const initialState = {
	tags,
	activeTags: [],
}
export default ( prevState=initialState, action ) => {
	switch ( action.type) {
		case ACTION_TOGGLE_TAG:{
			const { activeTag } = action.payload;
			const { tags } = prevState;
			const updatedTags = [...tags];
			for (let tag of updatedTags){
				if (tag.name === activeTag){
					tag.active = !tag.active;
				}
			}
			const updatedActiveTags = updatedTags.filter(tag => tag.active === true).map( tag => tag.name);
			return {
				...prevState,
				activeTags: updatedActiveTags,
				tags: updatedTags
			}
		}
		default:
			return {
				...prevState,
			}
	}
}