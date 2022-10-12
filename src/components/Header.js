import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header id='header'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center relative px-4'>
          <Link
            to='/'
            className='site-title z-10'
          ><p className='text-2xl font-bold text-indigo-700'>DevQuiz</p></Link>
          <div onClick={() => setToggle(!toggle)} className='md:hidden z-10'>
            <FontAwesomeIcon icon={toggle ? faXmark : faBars}></FontAwesomeIcon>
          </div>
          <nav className={`toggle ${toggle ? 'toggle-true' : 'toggle-false'}`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/topics'>Topics</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;