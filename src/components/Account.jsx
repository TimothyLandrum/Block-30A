import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

const fetchAccount = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Please log in or create an account!");
    const user = await response.json();
    return user; // Return the entire response data, which includes user and books properties
  } catch (error) {
    console.error("Error fetching account:", error);
    throw error;
  }
};
const Account = ({ token }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const getAccount = async () => {
      try {
        const fetchedAccount = await fetchAccount(token);
        console.log(fetchedAccount);
        setUser(fetchedAccount);
      } catch (error) {
        setError(error.message);
      }
    };
    getAccount();
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!user.id) {
    // User is not logged in, render a message
    return <p>Please log in or create an account.</p>;
  }
  return (
    <div className="account">
      <h2 className="account-header">Account Information</h2>
      <div>
      <p>User ID: {user.id}</p>
      <p>First Name: {user.firstname}</p>
      <p>Last Name: {user.lastname}</p>
      <p>Email: {user.email}</p>
      <h3>Books Checked Out:</h3>
      {user.books && user.books.length > 0 ? (
        user.books.map((book) => (
          <div key={book.id}>
            {/* Possibly show how many books they have checked out */}
            <SingleBook book={book} />
          </div>
        ))
      ) : (
        <p>No books checked out.</p>
      )}</div>
    </div>
  );
};
export default Account;
