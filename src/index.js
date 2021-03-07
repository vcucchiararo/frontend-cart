import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./redux/index";

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
