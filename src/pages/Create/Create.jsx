// React imports
import { useState } from "react";

// Sass classes
import {
  gradient_border,
  quizzes_container,
} from "../Browse/Browse.module.scss";
import { create, create_form } from "./Create.module.scss";

// Models
import QuizModel from "../../models/quiz";

// Components
import Question from "../../components/Quiz/Question";

// Hooks
import useUsers from "../../hooks/useUsers";

function Create(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useUsers();

  const handleSubmit = (event) => {
    event.preventDefault();
    const testPic = new Image();

    testPic.onload = () => {
      QuizModel.create({
        title,
        category,
        thumbnail,
        questions,
        user: user._id,
      }).then((json) => {
        props.history.push("/browse");
      });
    };

    testPic.onerror = (e) => {
      QuizModel.create({
        title,
        category,
        thumbnail: "https://i.imgur.com/3FjTVyT.png",
        questions,
        user: user._id,
      }).then((json) => {
        props.history.push("/browse");
      });
    };

    testPic.src = thumbnail;
  };

  const updateQuestion = (index, data) => {
    console.log(data);

    const updatedArray = questions;

    if (data.text) {
      updatedArray[index].text = data.text;
    }

    if (data.options) {
      if (data.options.content)
        updatedArray[index].options[data.options.optionIndex].content =
          data.options.content;
      if (data.options.correct === false || data.options.correct === true)
        updatedArray[index].options[data.options.optionIndex].correct =
          data.options.correct;
    }

    setQuestions([...updatedArray]);
  };

  const addOption = (index, data) => {
    const updatedArray = questions;
    updatedArray[index].options.push(data);
    setQuestions([...updatedArray]);
  };

  return (
    <div className={create}>
      <div className={gradient_border}>
        <div className={quizzes_container}>
          <form className={create_form} onSubmit={handleSubmit}>
            <h3>Create a Quiz</h3>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title of your quiz"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              placeholder="General, Entertainment, etc."
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="thumbnail">Quiz Image</label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Paste a URL like https://i.imgur.com/3FjTVyT.png"
              onChange={(e) => setThumbnail(e.target.value)}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <p> Add questions by clicking the "+" button. </p>
        <p> To mark an answer as correct, click it and see it turn green.</p>
        <p> Add more answers by clicking the "+" button. </p>
      </div>
      <div>
        <i
          className="fas fa-plus-circle"
          onClick={() =>
            setQuestions([...questions, { text: "", options: [] }])
          }
        ></i>
        {questions.map((question, i) => (
          <Question
            addOption={addOption}
            index={i}
            text={question.text}
            options={question.options}
            update={updateQuestion}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Create;
