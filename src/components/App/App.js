import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import FormJournalEntry from '../FormJournalEntry/FormJournalEntry'
import EntryImage from '../FormEntryImage/FormEntryImage';
import Journal from '../Journal/Journal';

const App = () => {
  const [journalEntries, setJournalEntries] = useState([])
  
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/newentry" render={() => <FormJournalEntry journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
      <Route exact path="/addimage" render={() => <EntryImage />} />
      <Route exact path="/journal" component={Journal} />
    </div>
  );
}

export default App;
