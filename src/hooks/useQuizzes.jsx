import { useState, useEffect } from "react";

import QuizModel from "../models/quiz";

export default function useQuizzes(id) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(function () {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = () => {
    if (id) {
      QuizModel.userQuizzes(id).then((json) => {
        setQuizzes(json.quizzes);
      });
    } else {
      QuizModel.all().then((json) => {
        setQuizzes(json.quizzes);
      });
    }
  };

  return [quizzes, fetchQuizzes, setQuizzes];
}
