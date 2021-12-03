import { useState, useEffect } from "react";

function useLobby(id) {
  const [lobby, setLobby] = useState([]);

  useEffect(() => {
    window.socket.on("lobby", (lobby) => {
      console.log(lobby);
      setLobby(lobby);
    });

    window.socket.emit("get-lobby", id);

    return () => {
      // window.socket.stop("lobby");
    };
  }, []);

  return lobby;
}

export default useLobby;
