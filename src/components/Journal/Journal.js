import React, { useState } from "react";
import './Journal.css'
import JournalFilter from "../JournalFilter/JournalFilter";
import JournalEntryCard from "../JournalEntryCard/JournalEntryCard";

const Journal = ({ journalEntries }) => {
  const [isFiltered, setIsFiltered] = useState(false)
  const [filteredEntries, setFilteredEntries] = useState([])

  const createEntryCards = (entries) => {
    return entries.map(entry =>  <JournalEntryCard key={entry.id} entry={entry} />)
  }

  return (
    <section>
      <JournalFilter
        journalEntries={journalEntries}
        setIsFiltered={setIsFiltered}
        setFilteredEntries={setFilteredEntries} />
      <div className="journal-cards">
        {isFiltered ?
          createEntryCards(filteredEntries) :
          createEntryCards(journalEntries)}
      </div>
    </section>
  )
}

export default Journal;