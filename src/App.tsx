import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Sidebar from './components/Sidebar';
import Details from './components/Details';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/:id">
              <Sidebar />
              <Details />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
