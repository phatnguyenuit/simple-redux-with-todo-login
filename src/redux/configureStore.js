import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import createRootReducer from "./reducer";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

export const persistConfig = {
  storage,
  key: "root",
  stateReconciler: autoMergeLevel1,
  blacklist: ["router"],
  serialize: true,
  debug: true
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();

export default () => {
  let store = createStore(
    persistedReducer,
    {},
    applyMiddleware(routerMiddleware(history), thunk, logger)
  );
  let persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
