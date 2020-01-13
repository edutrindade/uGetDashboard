import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Establishments from "./pages/establishments/establishments.js";
import Events from "./pages/events/events.js";
import Main from "./pages/main/main.js";
import ClosingEvents from "./pages/closing-events/closing-events.js";
import HeaderTest from "./assets/header-test.js";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/establishments" component={Establishments} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/dashboard" component={Main} />
      <Route exact path="/closing-events" component={ClosingEvents} />
      <Route exact path="/header-test" component={HeaderTest} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
