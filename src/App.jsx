import React from 'react';
import { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/NavBar';
import Account from './components/Account'
import SingleBook from './components/SingleBook';
import './App.css'


function App() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  console.log('Token in App:', token);

  const updateToken = (newToken, userInfo) => {
    setToken(newToken);
    setUserInfo(userInfo);
    console.log('Token updated in App:', newToken);
  };


  return (
    <>
    <NavBar token={token} />

      <Routes>
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/account' element={<Account setToken={setToken} token={token} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/books' element={<div ><Books /></div>} />
      </Routes>
    </>
  )
}

export default App;