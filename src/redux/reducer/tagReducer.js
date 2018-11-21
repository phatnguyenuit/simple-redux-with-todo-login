/* Part 4: Tag Reducer */
import { ACTION_TOGGLE_TAG } from '../constants'
import { tags } from '../../api/data'

const initTagState = {
	tags,
	activeTag: ''
}
export default ( prevState=initTagState, action ) => {
	switch ( action.type) {
		case ACTION_TOGGLE_TAG:{
			const { activeTag } = action.payload;
			const prevActiveTag = prevState.activeTag;
			const { tags } = prevState;
			const updatedTags = tags.map(tag => {
				let active = false;
				if (tag.name == activeTag && !tag.active){
					active = true;
				}
				return {
					...tag,
					active
				}
			});
			return {
				...prevState,
				activeTag: prevActiveTag == activeTag ? '' : activeTag,
				tags: updatedTags
			}
		}
		default:
			return {
				...prevState,
			}
	}
}