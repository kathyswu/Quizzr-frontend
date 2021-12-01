import { useState, useEffect } from "react";

import QuizModel from "../models/quiz";

export default function useQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(
    function() {
    fetchQuizzes();
    },
    []
  );

  const fetchQuizzes = () => {
    QuizModel.all().then(json => {
      setQuizzes(json.quizzes);
    });
  };

  return [quizzes, fetchQuizzes];
}