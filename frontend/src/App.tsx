import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <p>Meow</p>
          </Route>
          <Route path="/users">
            <p>Woof</p>
          </Route>
          <Route path="/">
            <p>Quack</p>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
