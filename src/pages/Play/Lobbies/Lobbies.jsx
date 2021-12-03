// React imports
import { useState, useEffect } from "react";

// Sass classes
import { gradient_border } from "../../Browse/Browse.module.scss";
import {
  lobbies_page,
  lobbies_container,
  user_container,
  rooms_border,
  room,
  background,
} from "../Play.module.scss";

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
  return (
    <div className={lobbies_page}>
      <div className={gradient_border}>
        <div className={lobbies_container}>
          <section className={user_container}>
            <img src={user[0].avatar} alt={user[0].username} />
            <p>{user[0].username}</p>
          </section>
          <section className={rooms_border}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
            <article className={room}>
              <p>Lobby Name</p>
              <p>1 / 4</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Lobbies;
