import React from 'react';

const QuizOptions = ({ props, queId, index, handleQuizCorrect }) => {

  return (

    <div onClick={() => handleQuizCorrect(queId, props, index)} className='que-options'>
      <div>
        {props}
      </div>
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

