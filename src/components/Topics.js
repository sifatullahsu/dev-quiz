import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicGrid from './TopicGrid';

const Topics = () => {
  const topics = useLoaderData();
  const { status, data } = topics;


  return (
    <section className='py-14'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-2xl lg:text-3xl font-semibold mb-3 text-indigo-800'>Test Your Professional Skills</h2>
          <p className='mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, alias?</p>

        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-3'>
          {data.map(item => <TopicGrid props={item} key={item.id}></TopicGrid>)}
        </div>
      </div>
    </section>
  );
};

export default Topics;