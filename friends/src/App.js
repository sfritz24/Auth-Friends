import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/protected'>Friends List</Link>
          <Link to='/add'>Add a Friend</Link>
        </nav>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/protected' component={Friends}/>
          <Route exact path='/add' component={AddFriend}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
