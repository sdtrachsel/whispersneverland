import React, { useState } from "react";
import './Journal.css';
import JournalFilter from "../JournalFilter/JournalFilter";
import JournalEntryCard from "../JournalEntryCard/JournalEntryCard";
import PropTypes from 'prop-types';

const Journal = ({ journalEntries }) => {
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredEntries, setFilteredEntries] = useState([])

  const createEntryCards = (entries) => {
    if (entries.length > 0) {
      return entries.map(entry => <JournalEntryCard key={entry.id} entry={entry} />);
    }
    return <p className="no-entry">No Entries Found</p>;
  }

  return (
    <section>
      <div className="filter-container">
        <JournalFilter
          journalEntries={journalEntries}
          setIsFiltered={setIsFiltered}
          setFilteredEntries={setFilteredEntries} />
      </div>
      <div className="journal-cards">
        {isFiltered ?
          createEntryCards(filteredEntries) :
          createEntryCards(journalEntries)}
      </div>
    </section>
  )
}

Journal.propTypes = {
  journalEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Journal;