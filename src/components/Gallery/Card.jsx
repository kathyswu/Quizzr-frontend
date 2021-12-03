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

// Models
import QuizModel from "../../models/quiz";

function Card(props) {
  const [user, setUser] = useUsers();

  const handleDelete = () => {
    //QuizModel.delete();
  };

  return (
    <div className={card}>
      <div className={buttons}>
        {user._id === props.quiz.user ? (
          <a onClick={handleDelete}>
            <i className={`far fa-trash-alt ${delete_icon}`}></i>
          </a>
        ) : (
          <div></div>
        )}
        <Link to="/play">
          <i className={`fas fa-play ${play_icon}`}></i>
        </Link>
      </div>
      <img className={card_image} src={props.thumbnail} alt={props.title} />
      <div className={card_header}>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;
