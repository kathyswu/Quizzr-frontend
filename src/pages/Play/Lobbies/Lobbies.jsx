// Sass classes
import { gradient_border } from "../../Browse/Browse.module.scss";
import {
  lobbies_page,
  lobbies_container,
  user_container,
  rooms_border,
  room,
} from "../Play.module.scss";

// Hooks
import useLobbies from "../../../hooks/useLobbies";

const user = [
  {
    username: "username1",
    avatar: "https://i.imgur.com/B84tGhT.jpg",
  },
  {
    username: "username2",
    avatar: "https://i.imgur.com/B84tGhT.jpg",
  },
  {
    username: "username3",
    avatar: "https://i.imgur.com/B84tGhT.jpg",
  },
  {
    username: "username4",
    avatar: "https://i.imgur.com/B84tGhT.jpg",
  },
];

function Lobbies(props) {
  const lobbies = useLobbies();

  const createLobby = (e) => {
    window.socket.emit("create-lobby");
  };

  const joinLobby = (e) => {
    window.socket.emit("join-lobby");
  };

  return (
    <div className={lobbies_page}>
      <div className={gradient_border}>
        <div className={lobbies_container}>
          <section className={user_container}>
            <img src={user[0].avatar} alt={user[0].username} />
            <p>{user[0].username}</p>
            <button onClick={createLobby}>Create Lobby</button>
          </section>
          <section className={rooms_border}>
            {lobbies.map((lobby, index) => {
              return (
                <article className={room} onClick={joinLobby}>
                  <p>{`Lobby #${index + 1}`}</p>
                  <p>{lobby[1].length} / 4</p>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
export default Lobbies;
