import React from 'react';
import { Link } from 'react-router-dom';

const TopicGrid = ({ props }) => {
  const { id, name, logo, total } = props;

  return (
    <div className='topic'>
      <img src={logo} alt="" className='w-100' />
      <div className='topic-info'>
        <div>
          <h3 className='text-xl'>{name}</h3>
          <p>Question: {total}</p>
        </div>
        <div>
          <Link to={`/quiz/${id}`}><button>Start Quiz</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TopicGrid;