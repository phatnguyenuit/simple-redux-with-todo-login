/* Part 3:  Filter action creator */

import { ACTION_TOGGLE_FILTER } from "../constants";

export const actionToggleFilter = filter => {
  return {
    type: ACTION_TOGGLE_FILTER,
    payload: {
      activeFilter: filter
    }
  };
};
