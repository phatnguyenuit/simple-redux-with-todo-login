/* Part 2: Todo action creator */

import {
  ACTION_ADD_TODO,
  ACTION_LOAD_TODO,
  ACTION_SEARCH_TODO,
  ACTION_UPDATE_TODO
} from "../constants";

import { prefixIdTodo } from "../../api/data";
import { uniqueId } from "lodash";

//Fake user


export const actionAddTodo = values => {
  const { description } = values;
  let todo = false;
  if (description) {
    todo = {
      id: uniqueId(prefixIdTodo),
      status: "not_start",
      ...values
    };
  }
  return {
    type: ACTION_ADD_TODO,
    payload: {
      todo
    }
  };
};

export const actionSearchTodo = query => {
  return {
    type: ACTION_SEARCH_TODO,
    payload: {
      query
    }
  };
};

export const actionLoadTodo = user_id => {
  return {
    type: ACTION_LOAD_TODO,
    payload: {
      user_id
    }
  };
};

export const actionUpdateTodo = (id, values) => {
  return {
    type: ACTION_UPDATE_TODO,
    payload: {
      id,
      values
    }
  };
};
