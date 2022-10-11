import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer' className='text-center'>
      <p>2022 All Right Reserved By <span className='text-indigo-800'><Link to='/'>DevQuiz</Link></span></p>
    </footer>
  );
};

export default Footer;