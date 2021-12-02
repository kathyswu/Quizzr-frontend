import { useState, useEffect } from "react";

import {
  question,
  question_container,
  question_form,
  answers,
} from "../../pages/Create/Create.module.scss";

import Answer from "./Answer";

function Question(props) {
  const [text, setText] = useState(props.text);
  const [options, setOptions] = useState(props.options);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(
    function () {
      setText(props.text);
    },
    [props.text]
  );

  useEffect(
    function () {
      setOptions(props.options);
    },
    [props.options]
  );

  return (
    <div className={question}>
      <div className={question_container}>
        <form className={question_form} onSubmit={handleSubmit}>
          <h3>Add a Question</h3>
          <input
            type="text"
            name="question"
            placeholder="eg. Who wrote the play 'Macbeth'?"
            value={text}
            onChange={(e) =>
              props.update(props.index, { text: e.target.value })
            }
          />
        </form>
        <h3>Answers</h3>

        <i
          className="fas fa-plus-circle"
          onClick={() =>
            props.addOption(props.index, { content: "", correct: false })
          }
        ></i>
        <div className={answers}>
          {options.map((answer, i) => (
            <Answer
              update={props.update}
              questionIndex={props.index}
              optionIndex={i}
              content={answer.content}
              correct={answer.correct}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
