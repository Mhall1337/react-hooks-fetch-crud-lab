import React from "react";

function QuestionItem({ question, handleAnswerChange }) {

  
  const { id, prompt, answers, correctIndex } = question;

  function handleOnChange(e, correctIndex){
    handleAnswerChange(id, parseInt(e.target.value))
}  
  console.log("here", answers)
  // const options = answers.map((answer, index) => (
    
  //   <option key={index} value={index}>
  //     {answer}
  //   </option>
  // ));
  const options = answers.map((answer, index) => (<option key={index} value={index}>{answer}</option>));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleOnChange}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
