import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from './HeroSection';
import TopicGrid from './TopicGrid';

const Home = () => {
  const topics = useLoaderData();
  const { status, data } = topics;


  return (
    <div>
      <HeroSection></HeroSection>
      {
        data.map(item => <TopicGrid props={item} key={item.id}></TopicGrid>)
      }
    </div>
  );
};

export default Home;