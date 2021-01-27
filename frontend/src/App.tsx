import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login/Index';
import Currency from './components/Currency';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/currency">
          <Header />
          <Currency />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
