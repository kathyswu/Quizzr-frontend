// React modules
import { useState, useEffect } from "react";

// Sass classes
import {
  chat_container,
  messages,
  user_message,
} from "../../pages/Play/Play.module.scss";

function Chat(props) {
  return (
    <article className={chat_container}>
      <h5>
        <i className="fas fa-comments"></i> Chat
      </h5>
      <div className={messages}>
        <div className={user_message}>
          <img src={props.user.avatar} />
          <p>{props.user.username} says:</p>
          <p>Lorem ipsum dolor inet est </p>
        </div>
      </div>
      <input type="text" name="chat" />
    </article>
  );
}

export default Chat;
