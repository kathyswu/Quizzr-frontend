import { card, card__header, card__image} from "./Gallery.module.scss";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to="/quizzes" className={card}>
      <img className={card__image} src={props.thumbnail} alt={props.title} />
      <div className={card__header}>
        <p>{props.title}</p>
      </div>
    </Link>
  )
}

export default Card;