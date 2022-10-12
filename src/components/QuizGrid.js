import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOptions from './QuizOptions';

const QuizGrid = ({ props, queNo, handleCorrectCount }) => {
  const { id, question, options, correctAnswer } = props;

  const [isAnswered, setIsAnswered] = useState(false);
  const [hint, setHint] = useState(false);


  const handleQuizCorrect = (queId, index, option) => {
    setIsAnswered(true);

    if (option === correctAnswer) {
      handleCorrectCount();
      toast.success("Correct!")
    }
    else {
      toast.error("Incorrect!")
    }
  }


  return (
    <div className='py-12 border-b border-gray-300 border-solid relative' >
      <h3
        className='text-lg md:text-xl text-indigo-800 mb-5'
        dangerouslySetInnerHTML={{ __html: question }}
      ></h3>

      <div className='absolute top-4 left-0' >
        <span className='mr-4' style={{ color: '#7a7a7a', fontSize: '14px' }}>Que {queNo}:</span>
        <span onClick={() => setHint(!hint)}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </span>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {options.map((option, index) => <QuizOptions
          key={index}
          index={index}
          queId={id}
          option={option}
          handleQuizCorrect={handleQuizCorrect}
          isAnswered={isAnswered}
        ></QuizOptions>)}
      </div>

      <ToastContainer />
      {hint &&
        <div className='text-center mt-8 bg-yellow-700 text-white p-3'>
          <p><span className='font-bold'>Hint:</span> {correctAnswer}</p>
        </div>
      }
    </div>
  );
};

export default QuizGrid;