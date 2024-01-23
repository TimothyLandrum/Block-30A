/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Handle the result as needed, e.g., store user information in state or localStorage
      })
      .catch(error => {
        console.error(error);
        // Handle errors if any
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" value={loginData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;