import React from 'react';
import { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/NavBar';

function App() {
  const [token, setToken] = useState(null);


  return (
    <>
    <NavBar />

      <Routes>
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/Books' element={<Books />} />
      </Routes>
    </>
  )
}

export default App;