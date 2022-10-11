import React, { useState } from 'react';

const QuizOptions = ({ index, queId, option, handleQuizCorrect, isAnswered }) => {

  const newIndex = index + 1;
  const [active, setActive] = useState(false);

  const handleButton = () => {
    if (!active && !isAnswered) {
      handleQuizCorrect(queId, newIndex, option);
      setActive(!active);
    }
  }

  return (
    <div onClick={() => {
      handleButton();
    }}
      className={`que-options ${active ? 'active' : ''}`}
    >{option}</div>
  );
};

export default QuizOptions;

