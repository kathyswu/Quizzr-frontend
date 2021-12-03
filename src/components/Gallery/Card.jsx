// React modules
import { Link } from "react-router-dom";

// Sass classes
import {
  card,
  card_header,
  card_image,
  buttons,
  delete_icon,
  play_icon,
} from "./Gallery.module.scss";

// Hooks
import useUsers from "../../hooks/useUsers";
import useQuizzes from "../../hooks/useQuizzes";

// Models
import QuizModel from "../../models/quiz";

function Card(props) {
  const [user, setUser] = useUsers();

  return (
    <div className={card}>
      <div className={buttons}>
        {user._id === props.quiz.user && props.hasDelete ? (
          <a onClick={() => props.handleDelete(props.quiz._id, props.index)}>
            <i className={`far fa-trash-alt ${delete_icon}`}></i>
          </a>
        ) : (
          <div></div>
        )}
        <Link to={`/play/${props.quiz._id}`}>
          <i className={`fas fa-play ${play_icon}`}></i>
        </Link>
      </div>
      <img
        className={card_image}
        src={props.quiz.thumbnail}
        alt={props.quiz.title}
      />
      <div className={card_header}>
        <p>{props.quiz.title}</p>
      </div>
    </div>
  );
}

export default Card;
