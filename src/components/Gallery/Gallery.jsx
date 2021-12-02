import { gallery, cards_container } from "./Gallery.module.scss";

import Card from "./Card";

function Gallery(props) {
  const generateCards = quizzes => {
    return quizzes.map(quiz => <Card {...quiz} key={props.title + quiz._id} />);
  }

  return (
    <div className={gallery}>
      <h5>{props.title}</h5>
      <div className={cards_container}>
        {generateCards(props.data)}
      </div>
    </div>
  );
};

export default Gallery;