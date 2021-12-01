import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Login, Register, Profile, Browse } from "../pages";

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/user";

function Routes(props) {
  const isLoggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {isLoggedIn ? (
        <Switch>
          <Route path="/user/:id" component={Profile} />
          <Route path="/browse" component={Browse} />
        </Switch>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
}

export default Routes;
