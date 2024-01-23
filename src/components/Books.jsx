/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch all available books from the API
    fetch('/api/books', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        setBooks(result);
      })
      .catch(error => {
        console.error(error);
        // Handle errors if any
      });
  }, []);

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
            <p>{book.author}</p>
            <img src={book.coverimage} alt={book.title} style={{ maxWidth: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;