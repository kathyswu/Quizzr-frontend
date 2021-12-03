// React imports
import { Link } from "react-router-dom";

// Components
import Gallery from "../../components/Gallery/Gallery";

// Hooks
import useQuizzes from "../../hooks/useQuizzes";

// Sass classes
import {
  quizzes_container,
  gradient_border,
  top_title,
  play_banner,
} from "./Browse.module.scss";

function Quizzes(props) {
  const [quizzes, fetchQuizzes] = useQuizzes();

  return (
    <div className="browse">
      <div className={gradient_border}>
        <div className={quizzes_container}>
          <div className={play_banner}>
            <h4>Want to play with others?</h4>
            <p> See who's playing now, and join them for some quiz game fun!</p>
            <Link to="/play/lobbies">Browse Lobbies</Link>
            <p> Or want to play solo? No problem, find a quiz below!</p>
          </div>

          <div className={top_title}>
            <h4>Find a Quiz</h4>
            <button onClick={fetchQuizzes}>
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
          <Gallery title="All Quizzes" data={quizzes} />
          <Gallery
            title="Entertainment"
            data={quizzes.filter((quiz) => quiz.category === "Entertainment")}
          />
          <Gallery
            title="General"
            data={quizzes.filter((quiz) => quiz.category === "General")}
          />
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
