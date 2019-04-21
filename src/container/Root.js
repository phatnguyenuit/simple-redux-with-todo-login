import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import { Router } from "react-router-dom";
import configureStore from "../redux/configureStore";
import { history } from "../redux/configureStore";

const { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <App />
        </Router>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default Root;
