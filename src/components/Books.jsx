
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {

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