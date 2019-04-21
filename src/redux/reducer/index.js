import { ACTION_RESET_STATE } from "../constants";
import { REHYDRATE } from "redux-persist";
import authenticationReducer from "./authenticationReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import filterReducer from "./filterReducer";
import storage from "redux-persist/lib/storage";
import tagReducer from "./tagReducer";
import todoReducer from "./todoReducer";

export default history => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    authenticationReducer,
    todoReducer,
    filterReducer,
    tagReducer
  });
  const rootReducer = (prevState, action = {}) => {
    const payload = action.payload;
    switch (action.type) {
      case REHYDRATE: {
        return {
          ...prevState,
          ...payload
        };
      }
      case ACTION_RESET_STATE: {
        Object.keys(prevState).forEach(key => {
          storage.removeItem(`persist:${key}`);
        });
        prevState = undefined;
        return appReducer(prevState, action);
      }
      default:
        return appReducer(prevState, action);
    }
  };
  return rootReducer;
};
