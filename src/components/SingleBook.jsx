/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useState, useEffect } from 'react';

const SingleBook = ({ match }) => {
  const [book, setBook] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set this state based on user authentication status

  useEffect(() => {
    // Fetch the details of a single book using the bookId from the route parameters
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
        // Handle errors if any
      });

    // Set the user authentication status (isLoggedIn) based on your authentication logic
    // For example, you might check localStorage, cookies, or a global state
    // For demonstration purposes, setting it to true by default
    setIsLoggedIn(true);
  }, [match.params.bookId]);

  const handleCheckout = () => {
    // Add logic to handle book checkout, e.g., send a PATCH request to update book availability
    // You can use the fetch function similar to other examples
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