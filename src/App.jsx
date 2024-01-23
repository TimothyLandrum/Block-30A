import { useState } from 'react'
import bookLogo from './assets/books.png'
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Register />
      <Login />

    </>
  )
}

export default App;
