import { useEffect } from "react";
import SingleBook from "./SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookSlice";
import { Box } from '@mui/material';

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
            <h2>Book Selection</h2>
            <div >
            <ul className='books-container'>
                {booksList.map(book => (
                        <SingleBook key={book.id} book={book} />
                ))}
            </ul>
            </div>
        </div>
        
    );
};

export default Books;
