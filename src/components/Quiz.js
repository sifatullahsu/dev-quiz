import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizGrid from './QuizGrid';

const Quiz = () => {
  const quiz = useLoaderData();
  const { id, logo, name, questions, total } = quiz.data;

  const [start, setStart] = useState(false);
  let queNo = 0;

  return (
    <div className='grid' style={{ gridTemplateColumns: '70% 30%' }}>
      <div className='px-20 py-10'>
        {
          !start &&
          <div>
            <button onClick={() => setStart(!start)}>Click Me</button>
          </div>
        }
        {
          start &&
          questions.map(que => <QuizGrid key={que.id} props={que} queNo={queNo = queNo + 1}></QuizGrid>)
        }
        {
          start &&
          <div className='text-center pt-8'>
            <button onClick={() => setStart(!start)} className='py-2 px-5 bg-indigo-800 rounded text-white'>Finish</button>
          </div>
        }
      </div>
      {/* <div style={{ backgroundColor: '#ddd' }}> */}
      <div className='bg-gray-300'>
        sidebar
      </div>
    </div>
  );
};

export default Quiz;