import React, { useEffect, useState } from "react";

const BASE_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

const fetchBooks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/books`, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Network response issue');
        const data = await response.json();
        return data.books;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

const Books = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const fetchedBooks = await fetchBooks();
                setBooks(fetchedBooks);
            } catch (error) {
                setError(error.message);
            }
        }

        getBooks();
    }, []);


    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>{book.description}</p>
                        <img src={book.coverimage} alt={book.title} />
                        <p>{book.available ? 'Available' : 'Checked Out'}</p>
                    </li>
                ))}
            </ul>
            {books.length === 0 && <p>No books available.</p>}
        </div>
    );
};

export default Books;
