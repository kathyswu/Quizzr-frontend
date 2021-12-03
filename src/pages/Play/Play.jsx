// React imports
import { useState, useEffect } from "react";

// Sass classes
import { gradient_border } from "../Browse/Browse.module.scss";
import {
  play,
  play_container,
  users_container,
  player,
  game_container,
  right_container,
  stat_container,
  chat_container,
  answers_container,
  answer,
  question_box,
} from "./Play.module.scss";

// Components
import Chat from "../../components/Chat/Chat";

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

const question = [
  {
    text: "Who wrote the famous English play 'Macbeth'?",
    options: [
      {
        content: "Shakespeare",
        correct: true,
      },
      {
        content: "William",
        correct: false,
      },
      {
        content: "Hamlet",
        correct: false,
      },
      {
        content: "London",
        correct: false,
      },
    ],
  },
];

function Play(props) {
  return (
    <div className={play}>
      <div className={gradient_border}>
        <div className={play_container}>
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
          <section className={game_container}>
            <article className={question_box}>
              <p>{question[0].text}</p>
            </article>
            <article className={answers_container}>
              <div className={answer}>
                <p>{question[0].options[0].content}</p>
              </div>
              <div className={answer}>
                <p>{question[0].options[1].content}</p>
              </div>
              <div className={answer}>
                <p>{question[0].options[2].content}</p>
              </div>
              <div className={answer}>
                <p>{question[0].options[3].content}</p>
              </div>
            </article>
          </section>
          <section className={right_container}>
            <article className={stat_container}>
              <p>
                Question {question.length} / {question.length}
              </p>
            </article>
            <Chat user={user} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Play;
