import { Route, Switch, Router } from "react-router-dom";
import AddExpensePage from "./../components/AddExpensePage";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "./../components/DashboardPage";
import EditExpensePage from "./../components/EditExpensePage";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import PrivateRoute from './PrivateRoute';
import React from "react";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
