import { card, card_header, card_image } from "./Gallery.module.scss";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to="" className={card}>
      <img className={card_image} src={props.thumbnail} alt={props.title} />
      <div className={card_header}>
        <p>{props.title}</p>
      </div>
    </Link>
  );
}

export default Card;
