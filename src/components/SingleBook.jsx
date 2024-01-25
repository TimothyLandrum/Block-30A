/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React from "react";

const SingleBook = ({ book }) => {

    const {title, author, description, coverimage, available } = book;

    return (
        <div className='single-book'>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>{description}</p>
            <img src={coverimage} alt={`Cover of ${title}`} />
            <p>{available ? 'Available' : 'Checked Out'}</p>
        </div>

    );
};

export default SingleBook;