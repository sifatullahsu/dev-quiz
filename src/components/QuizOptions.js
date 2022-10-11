import React, { useState } from 'react';

const QuizOptions = ({ queId, option, correctAnswer }) => {
  console.log(queId, option, correctAnswer);

  const [answered, setAnswered] = useState({});

  const handleQuizCorrect = (option) => {

  }

  return (
    <div onClick={() => handleQuizCorrect(option)} className='que-options'>
      {option}
    </div>
  );
};

export default QuizOptions;

// 

/* 

<div className='wrapper'>
      <input type="radio" name={queId} id={`option-${index + 1}`} />

      <label htmlFor={`option-${index + 1}`} className={`option option-${index + 1}`}>
        <div className="dot"></div>
        <span>{props}</span>
      </label>
    </div >

*/

