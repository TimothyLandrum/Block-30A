import React from 'react';
import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Books from './components/Books';
import Navigations from './components/Navigations';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to logged off

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Navigations token={token} />
      <Routes>
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/Books' element={<Books />} />
      </Routes>
    </>
  )
}

export default App;
