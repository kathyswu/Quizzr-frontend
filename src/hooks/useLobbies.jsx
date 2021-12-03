import { useState, useEffect } from "react";

function useLobbies() {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    window.socket.on("lobbies", (lobbies) => {
      setLobbies(lobbies);
    });

    window.socket.emit("get-lobbies");

    return () => {
      // window.socket.stop("lobbies");
    };
  }, []);

  return lobbies;
}

export default useLobbies;
