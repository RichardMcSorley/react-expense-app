import { Route, Switch, Router } from "react-router-dom";
import AddExpensePage from "./../components/AddExpensePage";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "./../components/DashboardPage";
import EditExpensePage from "./../components/EditExpensePage";
import Header from "./../components/Header";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import React from "react";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
