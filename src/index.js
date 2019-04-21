import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import Root from "./container/Root";

// Bootstrap 4 and its dependencies
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
