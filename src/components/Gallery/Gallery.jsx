// Sass classes
import { gallery, cards_container } from "./Gallery.module.scss";

// Components
import Card from "./Card";

function Gallery(props) {
  const generateCards = (quizzes) => {
    return quizzes.map((quiz) => (
      //<Card {...quizzes} key={props.title + quiz._id} />
      <Card quiz={quiz} key={props.title + quiz._id} />
    ));
  };

  return (
    <div className={gallery}>
      <h5>{props.title}</h5>
      <div className={cards_container}>{generateCards(props.data)}</div>
    </div>
  );
}

export default Gallery;
