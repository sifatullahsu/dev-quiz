import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOptions from './QuizOptions';

const QuizGrid = ({ props, queNo }) => {
  const { id, question, options, correctAnswer } = props;

  const [hint, setHint] = useState(false);

  const hintFunctionality = () => {
    if (!hint) {
      setHint(!hint);
    }
  }



  const [answered, setAnswered] = useState([]);

  const handleQuizCorrect = (queId, index, option) => {

    if (!answered[queId]) {
      if (option === correctAnswer) {
        toast("Correct!")
      }
      else {
        toast("Incorrect!")
      }
    }


  }

  console.log(answered);


  return (
    <div className='py-12 border-b border-gray-300 border-solid relative' >
      <span>Que {queNo}:</span>
      <h3 className='text-xl font-semibold text-indigo-800 mb-5'>{question}</h3>

      <span className='absolute top-2 right-0' onClick={() => hintFunctionality()}>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </span>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {options.map((option, index) => <QuizOptions
          key={index}
          index={index}
          queId={id}
          option={option}
          handleQuizCorrect={handleQuizCorrect}
          correctAnswer={correctAnswer}
        ></QuizOptions>)}
      </div>

      <ToastContainer />
      {hint &&
        <div className='text-center pt-8'>
          <p>{correctAnswer}</p>
        </div>
      }
    </div>
  );
};

export default QuizGrid;