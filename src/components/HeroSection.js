import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className='hero-section text-white' style={{
      backgroundImage: "url(./images/header-bg.jpg)"
    }}>
      <h1 className='text-4xl md:text-6xl font-semibold  mb-3'>DevQuiz</h1>
      <p className='text-xl md:text-2xl mb-12'>A Leading Learning Platform</p>
      <div>
        <Link to='/topics' className='bg-indigo-800 py-3 px-7 rounded'>Explore Now</Link>
      </div>
    </section>
  );
};

export default HeroSection;