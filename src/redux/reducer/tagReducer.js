/* Part 4: Tag Reducer */
import { uniqueId } from 'lodash';
import { 
	ACTION_TOGGLE_TAG,
	ACTION_ADD_TAG,
} from '../constants';
import { tags, prefixIdTag } from '../../api/data';

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
		case ACTION_ADD_TAG: {
			const prevTags = [...prevState.tags];
			const { tags } = action.payload;
			const uniqueTags = tags.filter(tag => prevTags.every(t => t.name !== tag))
			const toAddTags = uniqueTags.map( tag => ({
				id: uniqueId(prefixIdTag),
				name: tag,
				active: false
			}));
			return {
				...prevState,
				tags: [
					...prevTags,
					...toAddTags,
				]
			}

		}
		default:
			return {
				...prevState,
			}
	}
}