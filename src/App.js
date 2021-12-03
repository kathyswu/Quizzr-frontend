import React from "react";
import Routes from "./config/routes";

import "./App.scss";

import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="background">
        <span />
        <span />
        <span />
        <span />
        <Nav />
        <Routes />
      </div>
    </div>
  );
}

export default App;
