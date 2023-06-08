import React, { useState } from 'react'
import "./App.css";
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import FormJournalEntry from '../FormJournalEntry/FormJournalEntry'
import Journal from '../Journal/Journal';
import JournalEntry from '../JournalEntry/JournalEntry';
import Error from '../Error/Error';

import data from '../../dummydata'

const App = () => {
  const [journalEntries, setJournalEntries] = useState(data)
  const location = useLocation();
  const currentEntryId = location.state?.currentEntryId;

  const renderJournalEntryOrError = ({ match }) => {
    const entryId = match.params.entryId;
    const selectedEntry = journalEntries.find(entry => Number(entryId) === entry.id);
    if (selectedEntry) {
      return <JournalEntry entryId={entryId} journalEntries={journalEntries} />
    }

    return <Error />;
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/newentry" render={() => <FormJournalEntry currentEntryId={currentEntryId} journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route exact path="/journal" render={() => <Journal journalEntries={journalEntries} setJournalEntries={setJournalEntries} />} />
        <Route path="/:entryId" render={renderJournalEntryOrError} />
        <Route exact path='*' render={() => <Error />} />
      </Switch>
    </div>
  );
}

export default App;