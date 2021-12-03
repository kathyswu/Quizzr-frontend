// Sass classes
import { gradient_border } from "../../Browse/Browse.module.scss";
import {
  lobby_page,
  lobby_container,
  users_container,
  player,
  game_info,
} from "../Play.module.scss";

// Components
import Chat from "../../../components/Chat/Chat";
import useLobby from "../../../hooks/useLobby";

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

const quiz = [
  {
    title: "Test your General Knowledge",
    category: "General",
    thumbnail: "https://i.imgur.com/3FjTVyT.png",
    questions: [
      {
        text: "What is the capital of Japan?",
        options: [
          {
            content: "Tokyo",
            correct: true,
          },
          {
            content: "Osaka",
            correct: false,
          },
          {
            content: "Kyoto",
            correct: false,
          },
          {
            content: "Hokkaido",
            correct: false,
          },
        ],
      },
    ],
  },
];

function Lobby(props) {
  const lobby = useLobby(props.match.params.id);

  return (
    <div className={lobby_page}>
      <div className={gradient_border}>
        <main className={lobby_container}>
          <section className={users_container}>
            <div className={player}>
              <img src={user[0].avatar} alt={user[0].username} />
              <p>{user[0].username}</p>
            </div>
            <div className={player}>
              <img src={user[1].avatar} alt={user[1].username} />
              <p>{user[1].username}</p>
            </div>
            <div className={player}>
              <img src={user[2].avatar} alt={user[2].username} />
              <p>{user[2].username}</p>
            </div>
            <div className={player}>
              <img src={user[3].avatar} alt={user[3].username} />
              <p>{user[3].username}</p>
            </div>
          </section>
          <Chat user={user[0]} />
          <section className={game_info}>
            <img src={quiz[0].thumbnail} alt="Quiz Logo" />
            <p>{quiz[0].title}</p>
            <a>Ready</a>
            <a>Start Game</a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Lobby;
