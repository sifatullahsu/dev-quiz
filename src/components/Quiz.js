import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizGrid from './QuizGrid';

const Quiz = () => {
  const quiz = useLoaderData();
  const { id, logo, name, questions, total } = quiz.data;

  const [start, setStart] = useState(false);
  let queNo = 0;

  return (
    <div className='grid' style={{ gridTemplateColumns: '30% 70%' }}>
      <div className='bg-gray-300' style={{ backgroundColor: '#232937' }}>
        sidebar
      </div>
      <div className='px-20 py-10'>
        {
          !start &&
          <div className='min-h-screen'>
            <img src={logo} alt="" className='w-14 bg-indigo-800 rounded' />
            <h2 className='text-4xl font-semibold mt-3'>{name}</h2>
            <p className=''>Total Question: {total}</p>
            <button onClick={() => setStart(!start)} className='py-2 px-5 bg-indigo-800 rounded text-white' style={{ marginTop: '50px' }}>Click Me</button>
          </div>
        }
        {
          start &&
          <div>
            <h2>Quiz of {name}</h2>
            {questions.map(que => <QuizGrid key={que.id} props={que} queNo={queNo = queNo + 1}></QuizGrid>)}
          </div>
        }
        {
          start &&
          <div className='text-center pt-8'>
            <button onClick={() => setStart(!start)} className='py-2 px-5 bg-indigo-800 rounded text-white'>Finish</button>
          </div>
        }
      </div>
    </div>
  );
};

export default Quiz;