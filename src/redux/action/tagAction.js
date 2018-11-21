/* Part 4: Tag action creator */
import {
	ACTION_TOGGLE_TAG,
} from '../constants'


export const actionToggleTag = ( tag ) => {
	return {
		type: ACTION_TOGGLE_TAG,
		payload: {
			activeTag: tag
		}
	}
}