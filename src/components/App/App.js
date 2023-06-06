// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import JournalEntry from '../JournalEntry/JournalEntry'

const App = () => {
  const [journalEntries, setJournalEntries] = useState([])
  
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/newentry" render={() => <JournalEntry setJournalEntries={setJournalEntries} />} />
    </div>
  );
}

export default App;
