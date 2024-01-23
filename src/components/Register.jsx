/* TODO - add your code to create a functional React component that renders a registration form */

import React, { useState } from 'react';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = () => {
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData)
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
      <h1>Register</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstname" value={registerData.firstname} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" value={registerData.lastname} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={registerData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={registerData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;