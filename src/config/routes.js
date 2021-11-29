import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
