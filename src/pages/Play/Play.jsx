// React imports
import { useState, useEffect, useRef } from "react";

// Sass classes
import { gradient_border } from "../Browse/Browse.module.scss";
import {
  play,
  play_container,
  users_container,
  player,
  game_container,
  right_container,
  stat_container,
  answers_container,
  answer,
  right,
  wrong,
  question_box,
} from "./Play.module.scss";

// Components
import Chat from "../../components/Chat/Chat";

// Hooks
import useUsers from "../../hooks/useUsers";
import useQuizzes from "../../hooks/useQuizzes";
import QuizModel from "../../models/quiz";

const question = [
  {
    text: "Who wrote the famous English play 'Macbeth'?",
    options: [
      {
        content: "Shakespeare",
        correct: true,
      },
      {
        content: "William",
        correct: false,
      },
      {
        content: "Hamlet",
        correct: false,
      },
      {
        content: "London",
        correct: false,
      },
    ],
  },
];

function Play(props) {
  const [user, setUser] = useUsers();
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [questionsRight, setQuestionsRight] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const questions = useRef(null);

  useEffect(function () {
    QuizModel.findOne(props.match.params.id).then((json) => {
      setTotalQuestions(json.quiz.questions.length);
      questions.current = json.quiz.questions;
      setQuestionText(json.quiz.questions[index].text);
      setOptions(json.quiz.questions[index].options);
    });
  }, []);

  const nextQuestion = () => {
    setSelectedOption(null);
    setIndex((prev) => ++prev);
  };

  const selectOption = (i) => {
    if (selectedOption === null) setSelectedOption(i);

    if (questions.current[index].options[i].correct) {
      setQuestionsRight((prev) => ++prev);
    }

    setTimeout(() => nextQuestion(), 2000);
  };

  console.log(questionsRight);

  useEffect(() => {
    if (index > 0 && index < questions.current.length) {
      setQuestionText(questions.current[index].text);
      setOptions(questions.current[index].options);
    }
  }, [index, questions]);

  return (
    <div className={play}>
      <div className={gradient_border}>
        <div className={play_container}>
          <section className={users_container}>
            <div className={player}>
              <img src={user.avatar} alt={user.username} />
              <p>{user.username}</p>
            </div>
          </section>
          <section className={game_container}>
            <article className={question_box}>
              <p>{questionText}</p>
            </article>
            <article className={answers_container}>
              {options.map((option, i) => (
                <div
                  className={
                    answer +
                    " " +
                    (selectedOption !== null
                      ? option.correct
                        ? right
                        : wrong
                      : "")
                  }
                  onClick={() => selectOption(i)}
                >
                  <p>{option.content}</p>
                </div>
              ))}
            </article>
          </section>
          <section className={right_container}>
            <article className={stat_container}>
              <p>
                Question: {index + 1} / {totalQuestions}
              </p>
              <p>
                Score: {questionsRight} / {totalQuestions}
              </p>
            </article>
            <Chat user={user} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Play;
