

/*
import React, { useEffect, useState } from 'react';

const Account = ({ token }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await fetch('/api/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        if (token) {
            fetchUserData();
        }
    }, [token]);

    const returnBook = async (bookId) => {
        try {
            const response = await fetch(`/api/reservations/${reservationId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ available: true })
            });
            if (response.ok) {
                setUserInfo(prevUserInfo => ({
                    ...prevUserInfo,
                    books: prevUserInfo.books.filter(book => book.id !== bookId)
                }));
            } else {
                console.error('Failed to return book');
            }
        } catch (error) {
            console.error(error);
        }
    };


    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Information</h2>
            <p>Name: {userInfo.firstname} {userInfo.lastname}</p>
            <p>Email: {userInfo.email}</p>
            <h3>Checked-out Books:</h3>
            {userInfo.books.length > 0 ? (
                <ul>
                    {userInfo.books.map(book => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                            <button onClick={() => returnBook(book.id)}>Return</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books checked out.</p>
            )}
        </div>
    );
};

export default Account;

*/

import React, { useEffect, useState } from 'react';

function Account({ token, userInfo, setUserInfo }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log('Token in Account:', token);
                const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                } else {
                    console.error('Failed to fetch user data', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        console.log('Token in Account component:', token);

        fetchUserData();
    }, [token]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Information</h2>
            <p>Name: {userInfo.firstname} {userInfo.lastname}</p>
            <p>Email: {userInfo.email}</p>
        </div>
    );
};

export default Account;
