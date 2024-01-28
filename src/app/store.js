import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/bookSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer,
    },
});