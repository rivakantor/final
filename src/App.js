import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Class App</h1>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/recipes">
            <RecipesPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;