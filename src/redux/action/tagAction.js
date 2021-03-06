/* Part 4: Tag action creator */

import { ACTION_ADD_TAG, ACTION_TOGGLE_TAG } from "../constants";

export const actionToggleTag = tag => {
  return {
    type: ACTION_TOGGLE_TAG,
    payload: {
      activeTag: tag
    }
  };
};

export const actionAddTag = tags => {
  return {
    type: ACTION_ADD_TAG,
    payload: {
      tags
    }
  };
};
