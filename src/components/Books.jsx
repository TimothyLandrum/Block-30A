import React, { useEffect } from "react";
import SingleBook from "./SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookSlice";

const Books = () => {
    const dispatch = useDispatch();
    const { booksList, loading, error } = useSelector((state) => state.books);
    const token = useSelector((state) => state.auth.token);


    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const handleCheckout = (bookId) => {
        if(!isAuthenticated) {
            alert("Please log in to checkout books.");
            return;
        }
        const requestOptions = {
            method
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {booksList.map(book => (
                        <SingleBook key={book.id} book={book} token={token} onCheckout={handleCheckout}/>
                ))}
            </ul>
        </div>
        
    );
};

export default Books;
