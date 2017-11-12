import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import * as filterActions from "./actions/filters";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import expenseSelector from "./selectors/expenses";
import React, { Component } from "react";
import ReactDOM from "react-dom";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
