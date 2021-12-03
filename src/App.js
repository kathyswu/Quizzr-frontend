import React from "react";
import Routes from "./config/routes";
import { useEffect } from "react";

import { io } from "socket.io-client";

import "./App.scss";

import Nav from "./components/Nav/Nav";

import { useRecoilState } from "recoil";
import { userState } from "./recoil/user";

function App() {
  const [user] = useRecoilState(userState);

  useEffect(() => {
    if (user?._id) {
      const socket = io("http://localhost:5000/", {
        cors: {
          origin: "http://localhost:5000",
          credentials: true,
        },
        transports: ["websocket"],
        upgrade: false,
        query: {
          userId: user._id,
        },
      });

      window.socket = socket;
    }
  }, [user]);

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
