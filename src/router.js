import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Application from "./components/application/application";
import Orders from "./components/application/orders/orders";
import SignUp from "./components/auth/sign-up/signUp";
import PageNotFound from "./components/page-not-found/pageNotFound";

export default function OndcRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={() => <Redirect to={"/login"} />} />
        <Route path={"/login"} component={Orders} />
        <Route path={"/sign-up"} component={SignUp} />
        <Route path={"/application"} component={Application} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Route path="" component={() => <Redirect to="/page-not-found" />} />
      </Switch>
    </Router>
  );
}
