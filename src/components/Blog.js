import React from 'react';

const Blog = () => {
  return (
    <section>
      <div className='mx-auto py-5 lg:py-14 px-3' style={{ maxWidth: '768px' }}>
        <div className='py-5'>
          <h2 className='text-xl font-semibold mb-2'>What is the purpose of the React Router?</h2>
          <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. In easy way, React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application</p>
        </div>
        <div className='py-5'>
          <h2 className='text-xl font-semibold mb-2'>How does work Context API?</h2>
          <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. It means React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it </p>
        </div>
        <div className='py-5'>
          <h2 className='text-xl font-semibold mb-2'>What is useHref hook and how does it work?</h2>
          <p>useHref - The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. useResolvedPath - This hook resolves the pathname of the location in the given to value against the pathname of the current location. This is useful when building links from relative values. In easy way, The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;