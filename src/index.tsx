import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./stores/redux/store";

import App from "./App";

import "./lib/i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
