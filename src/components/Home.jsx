import React from 'react';

const Home = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>Welcome to the Library</h2>
      <p>
        {isLoggedIn
          ? 'You are currently logged in. Explore our books and enjoy!'
          : 'Log in or register to access the full library and make reservations.'}
      </p>
    </div>
  );
};

export default Home;