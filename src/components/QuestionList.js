import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";





function QuestionList({}) {
  const [questions, setQuestion]= useState([])
  const[answer, setAnswer] = useState("")


  function handleAnswerChange(id, correctIndex){
    console.log(id)
    console.log(correctIndex)
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/JSON"
      },
      body:JSON.stringify({
        correctIndex
      })
    })
    .then(resp => resp.json())
    .then(answer => setAnswer(answer))
  }

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
       <ul>{questions.map((question)=>(<QuestionItem key={question.id} question={question} handleAnswerChange={handleAnswerChange}/>))}</ul> 
    </section>
  );
}

export default QuestionList;
