import React from 'react';
import { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/NavBar';
import Account from './components/Account';
import './App.css'

function App() {
  const [token, setToken] = useState(null);


  return (
    <>
    <NavBar token={token}/>

      <Routes>
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/books' element={<div ><Books /></div>} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  )
}

export default App;