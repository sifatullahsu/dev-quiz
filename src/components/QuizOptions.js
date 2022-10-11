import React from 'react';

const QuizOptions = ({ index, queId, option, handleQuizCorrect, correctAnswer }) => {

  const newIndex = index + 1;

  return (
    <div onClick={() => handleQuizCorrect(queId, newIndex, option)} className='que-options'>{option}</div>
  );
};

export default QuizOptions;

