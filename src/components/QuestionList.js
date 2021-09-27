import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [questions, setQuestion]= useState([])

  function handleNewQuestion(question){
    const newQuestion = [...questions, question]
  }

  useEffect(()=>
  fetch("http://localhost:4000/questions")
  .then(resp => resp.json())
  .then(questions => setQuestion(questions)),
  [])
  return (
    <section>
      <h1>Quiz Questions</h1>
       <ul>{questions.map((question)=>(<QuestionItem question={question}/>))}</ul> 
    </section>
  );
}

export default QuestionList;
