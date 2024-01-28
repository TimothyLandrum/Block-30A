/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BASE_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

const fetchAccount = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
        });
        if (!response.ok) throw new Error('Network response issue');
        const data = await response.json();
        return data.account;
    } catch (error) {
        console.error('Error fetching account:', error);
        throw error;
    }
};

const Account = () => {
    const [account, setAccount] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAccount = async () => {
            try {
                const fetchedAccount = await fetchAccount();
                setAccount(fetchedAccount);
            } catch (error) {
                setError(error.message);
            }
        }

        getAccount();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Account Information</h2>
            {account.map(account => (
                <div key={account.id}>
                    <SingleBook account={account} />
                </div>
            ))}
            {account.length === 0 && <p>No account available.</p>}
        </div>
    );
};

export default Account;