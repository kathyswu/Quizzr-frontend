import { useState, useEffect } from "react";

import { answers, answer_container, answer_form } from "../../pages/Create/Create.module.scss";

function Answer(props) {
  const [content, setContent] = useState(props.content);
  const [correct, setCorrect] = useState(props.correct);

  const handleSubmit = event => {
    event.preventDefault();

    
  };

  useEffect(function(){
    setContent(props.content);
  },[props.content])

  useEffect(function(){
    setCorrect(props.correct);
  },[props.correct])

  return (
    <div className={answers}>
      <div className={answer_container}>
          <form className={answer_form} onSubmit={handleSubmit} onClick={e => props.update(props.questionIndex, {options: {optionIndex: props.optionIndex, correct: !props.correct }})}>
            <input 
              type="text" 
              name="text" 
              placeholder="eg. Shakespeare"
              value={content}
              onChange={e => props.update(props.questionIndex, {options: {optionIndex: props.optionIndex, content: e.target.value }})}
            />
          </form>
      </div>
    </div>
  );
} 

export default Answer;