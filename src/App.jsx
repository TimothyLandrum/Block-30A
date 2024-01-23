import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigations from './components/Navigations';
import Books from './components/Books';
import Login from './components/Login';
import Register from './components/Register';
import SingleBook from './components/SingleBook';
import Account from './components/Account';
import Reservations from './components/Reservations';
import Home from './components/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to logged off

  return (
    <Router>
      <div>
        <Navigations isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/" exact>
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/books" component={Books} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/books/:bookId" component={SingleBook} />
          {/* Additional routes for other views */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;