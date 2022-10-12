import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicGrid from './TopicGrid';

const Topics = () => {
  const topics = useLoaderData();
  const { data } = topics;


  return (
    <section className='py-14 custom-min-height'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-2xl lg:text-3xl font-semibold mb-3 text-indigo-800'>Test Your Professional Skills</h2>
          <p className='mb-12'>If you're looking for a short quiz to rate your professional skills, DevQuiz has the perfect for you.</p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-3'>
          {data.map(item => <TopicGrid props={item} key={item.id}></TopicGrid>)}
        </div>
      </div>
    </section>
  );
};

export default Topics;