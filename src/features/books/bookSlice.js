import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async() => {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        return data.books;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        booksList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
        })
            .addCase(fetchBooks.fulfilled, (state, action) => {
            state.booksList = action.payload;
            state.loading = false;
        })
            .addCase(fetchBooks.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
    
});

export default booksSlice.reducer;