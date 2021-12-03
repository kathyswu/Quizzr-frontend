import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  Home,
  Login,
  Register,
  Profile,
  Browse,
  Create,
  Play,
  Lobbies,
  Lobby,
} from "../pages";

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
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/create" component={Create} />
          <Route path="/play/lobbies/lobby" component={Lobby} />
          <Route path="/play/lobbies" component={Lobbies} />
          <Route path="/play" component={Play} />
        </Switch>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
}

export default Routes;
