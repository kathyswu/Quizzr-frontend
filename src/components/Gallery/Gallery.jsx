// Sass classes
import { gallery, cards_container } from "./Gallery.module.scss";

// Components
import Card from "./Card";

function Gallery(props) {
  const generateCards = (quizzes) => {
    return quizzes.map((quiz, index) => (
      <Card
        quiz={quiz}
        index={index}
        key={props.title + quiz._id}
        handleDelete={props.handleDelete}
        hasDelete={props.hasDelete}
      />
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
