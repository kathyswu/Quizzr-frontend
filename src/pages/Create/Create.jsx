import { useState, useEffect, createElement } from "react";

import { gradient_border, quizzes_container } from "../Browse/Browse.module.scss"
import { create, create_form } from "./Create.module.scss";

import QuizModel from "../../models/quiz";
import Question from "../../components/Quiz/Question";

function Create(props, history) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    QuizModel.create(
      title,
      category,
      thumbnail,
      questions,
    )
    .then(json => {
      this.props.history.push("/browse");
    });
    console.log({title, category, thumbnail, questions});
  };

  const updateQuestion = (index, data) => {
    const updatedArray = questions;
    if(data.text) {
      updatedArray[index].text = data.text;
    }
    if(data.options){
      if(data.options.content) updatedArray[index].options[data.options.optionIndex].content = data.options.content;
      if(data.options.correct) updatedArray[index].options[data.options.optionIndex].correct = data.options.correct;
    }
    setQuestions([...updatedArray]);
  }

  const addOption = (index,data) => {
    const updatedArray = questions;
    updatedArray[index].options.push(data);
    setQuestions([...updatedArray]);
  }

  useEffect(function(){
    console.log("changed questions");
    console.log(questions);
  }, [questions])


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
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              name="category" 
              placeholder="General, Entertainment, etc."
              onChange={e => setCategory(e.target.value)}
            />
            <label htmlFor="thumbnail">Quiz Image</label>
            <input 
              type="text" 
              name="thumbnail" 
              placeholder="Paste a URL like https://i.imgur.com/3FjTVyT.png"
              onChange={e => setThumbnail(e.target.value)}
            />

            <input type="submit" value="submit"/>
          </form>
        </div>
          <p> Add questions by clicking the "+" button. </p>
          <p> To mark an answer as correct, click it and see it turn green.</p>
          <p> Add more answers by clicking the "+" button. </p>
       </div>
      <div>
        <i className="fas fa-plus-circle" onClick={() => setQuestions([...questions,{text: "", options: []}])}></i>
        { questions.map((question, i) => <Question addOption={addOption} index={i} text={question.text} options={question.options} update={updateQuestion} key={i} />) }
      </div>
    </div>
  );
} 

export default Create;