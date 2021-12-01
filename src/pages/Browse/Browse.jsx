import Gallery from "../../components/Gallery/Gallery";

import { quizzes_container, gradient_border, top_title } from "./Browse.module.scss";

import useQuizzes from "../../hooks/useQuizzes";

function Quizzes(props) {
  const [quizzes, fetchQuizzes] = useQuizzes();

  return (
    <div className="browse">
        <div className={gradient_border}>
        <div className={quizzes_container}>
          <div className={top_title}>
            <h4>Find a Quiz</h4>
            <button onClick={fetchQuizzes}><i className="fas fa-sync-alt"></i></button>
          </div>
          <Gallery title="All Quizzes" data={quizzes} />
          <Gallery title="Entertainment" data={quizzes.filter(quiz => quiz.category === "Entertainment")} />
          <Gallery title="General" data={quizzes.filter(quiz => quiz.category === "General")} />
        </div>
        </div>
    </div>
  )
}

export default Quizzes;