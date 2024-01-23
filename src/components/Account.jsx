/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React, { useState } from 'react';

const Account = () => {
  const [newUser, setNewUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateAccount = () => {
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Handle the result as needed
      })
      .catch(error => {
        console.error(error);
        // Handle errors if any
      });
  };

  return (
    <div>
      <h1>Create New Account</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstname" value={newUser.firstname} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" value={newUser.lastname} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={newUser.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleCreateAccount}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Account;