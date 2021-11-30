import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Login, Register } from "../pages";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}

export default Routes;
