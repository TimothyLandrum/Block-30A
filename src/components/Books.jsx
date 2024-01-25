import React, { useEffect } from "react";
import SingleBook from "./SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookSlice";

const Books = () => {
    const dispatch = useDispatch();
    const { booksList, loading, error } = useSelector((state) => state.books);


    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {booksList.map(book => (
                        <SingleBook key={book.id} book={book} />
                ))}
            </ul>
        </div>
        
    );
};

export default Books;
