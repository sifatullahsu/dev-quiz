import React from 'react';
import { Link } from 'react-router-dom';

const TopicGrid = ({ props }) => {
  const { id, name, logo, total } = props;

  return (
    <div className='topic'>
      <img src={logo} alt="" />
      <h3>{name}</h3>
      <span>{total}</span>
      <Link to={`./topics/${id}`}><button>Start Quiz</button></Link>
    </div>
  );
};

export default TopicGrid;