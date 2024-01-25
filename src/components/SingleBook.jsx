
import React, { useState, useEffect } from 'react';

const SingleBook = ({ match }) => {
  const [book, setBook] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set this state based on user authentication status

  useEffect(() => {
    fetch(`/api/books/${match.params.bookId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        setBook(result);
      })
      .catch(error => {
        console.error(error);
      });

    setIsLoggedIn(true);
  }, [match.params.bookId]);

  const handleCheckout = () => {
  };

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <img src={book.coverimage} alt={book.title} style={{ maxWidth: '300px' }} />
          {isLoggedIn && (
            <button type="button" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBook;