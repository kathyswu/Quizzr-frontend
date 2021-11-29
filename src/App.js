import React from "react";
import Routes from "./config/routes";

import "./App.scss";

import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
