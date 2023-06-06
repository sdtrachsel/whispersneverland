// import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
