import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getQuizResultsLS, setQuizResultsLS } from '../loader/quizResultsLS';
import Error from './Error';
import QuizGrid from './QuizGrid';
import QuizSidebar from './QuizSidebar';

const Quiz = () => {
  const quiz = useLoaderData();
  const { id, logo, name, questions, total } = quiz.data;

  const [start, setStart] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const getResultsLS = getQuizResultsLS();
  const [previousResult, setPreviousResult] = useState(getResultsLS);

  let queNo = 0;

  const handleCorrectCount = () => {
    setCorrectCount(correctCount + 1);
  }

  const handleFinishButton = () => {
    const newPreviousResult = [...previousResult];
    newPreviousResult.push({ id, correctCount });

    setPreviousResult(newPreviousResult);
    setQuizResultsLS(newPreviousResult);


    setStart(!start);
    setCorrectCount(0);
  }

  if (!quiz.status) {
    return (
      <Error></Error>
    );
  }

  return (
    <section id='quiz-page'>
      <div className='quiz-page-sidebar bg-gray-300' style={{ backgroundColor: '#232937' }}>
        <QuizSidebar props={previousResult} setPreviousResult={setPreviousResult}></QuizSidebar>
      </div>
      <div className='quiz-page-main px-5 pt-1 pb-10 lg:px-20 lg:py-10'>
        {
          !start &&
          <div className='py-5'>
            <img src={logo} alt="" className='w-14 bg-indigo-800 rounded' />
            <h2 className='text-2xl lg:text-4xl font-semibold mt-3'>{name}</h2>
            <p>Total Question: {total}</p>
            <button
              onClick={() => setStart(!start)}
              className='py-2 px-5 bg-indigo-800 rounded text-white'
              style={{ marginTop: '50px' }}
            >Start Quiz Test</button>
          </div>
        }
        {
          start &&
          <div>
            <div className='sticky top-0 py-3 bg-white z-10 border-b-2 border-solid border-gray-300'>
              <h2 className='text-2xl md:text-4xl font-semibold'>Quiz of {name}</h2>
              <p className='pt-2'>Correct Answer {correctCount}</p>
            </div>
            {
              questions.map(que => <QuizGrid
                key={que.id}
                props={que}
                queNo={queNo = queNo + 1}
                handleCorrectCount={handleCorrectCount}
              ></QuizGrid>)
            }
          </div>
        }
        {
          start &&
          <div className='text-center pt-8'>
            <button
              onClick={() => handleFinishButton()}
              className='py-2 px-5 bg-indigo-800 rounded text-white'
            >Finish</button>
          </div>
        }
      </div>
    </section>
  );
};

export default Quiz;