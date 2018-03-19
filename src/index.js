import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/App";
import appReducer from "./reducers";

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window._TMP_store = store;
