import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import FormJournalEntry from '../FormJournalEntry/FormJournalEntry'
import Journal from '../Journal/Journal';
import data from '../../dummydata';
import JournalEntry from '../JournalEntry/JournalEntry';


const App = () => {
  const [journalEntries, setJournalEntries] = useState(data)
  const location = useLocation();
  const currentEntryId = location.state?.currentEntryId;

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/newentry" render={() => <FormJournalEntry currentEntryId={currentEntryId} journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route exact path="/journal" render={() => <Journal journalEntries={journalEntries}
          setJournalEntries={setJournalEntries} />} />
        <Route path="/:entryId" render={({ match }) => <JournalEntry entryId={match.params.entryId} journalEntries={journalEntries} />} />
      </Switch>
    </div>
  );
}

export default App;