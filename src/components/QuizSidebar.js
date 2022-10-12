import React, { useEffect, useState } from 'react';
import { getQuizTopic } from '../loader/getQuizTopic';
import { setQuizResultsLS } from '../loader/quizResultsLS';

const QuizSidebar = ({ props, setPreviousResult }) => {

  const [quizTopics, setQuizTopics] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const quizTopicsPromise = getQuizTopic()
    quizTopicsPromise.then(data => setQuizTopics(data));
  }, []);


  useEffect(() => {
    const newResults = [];

    for (const item of props) {
      const id = item.id;
      const correctCount = item.correctCount;

      if (Array.isArray(quizTopics.data)) {
        const findInfo = quizTopics.data.find(data => data.id === id);

        if (findInfo) {
          const name = findInfo.name;
          const logo = findInfo.logo;
          const total = findInfo.total;

          newResults.push({ id, correctCount, name, logo, total })
        }
      }
    }
    setResults(newResults);

  }, [quizTopics, props]);


  return (
    <div className='sidebar text-white p-5' >
      <div>
        <h3 className='text-lg lg:text-2xl font-semibold'>Previous Results:</h3>
        {
          results.length ? results.map((item, index) => {
            const { id, name, logo, total, correctCount } = item;

            return (
              <div key={index} className='flex border-b border-solid border-gray-700 pt-2 pb-1'>
                <div style={{ flex: '0 0 50px' }}>
                  <img src={logo} alt="" className='w-100' />
                </div>
                <div style={{ flex: 'auto', padding: '5px' }}>
                  <p className='text-xl'>{name}</p>
                  <div className='flex justify-between flex-wrap text-sm'>
                    <p>Total: {total}</p>
                    <p>Correct: {correctCount}</p>
                    <p className='block lg:static'>Avg: {((100 * correctCount) / total).toFixed(2)}%</p>
                  </div>
                </div>
              </div>
            )
          })
            : <p>No Results Found in Database..</p>
        }
      </div>

      <div>
        {
          results.length ? <button
            className='bg-indigo-800 rounded py-2 px-5 mt-8'
            onClick={() => {
              setPreviousResult([]);
              setResults([])
              setQuizResultsLS([]);
            }}
          >Clear Previous Results</button> : null
        }
      </div>
    </div>
  );
};

export default QuizSidebar;