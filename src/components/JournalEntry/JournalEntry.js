import React, { useState, useEffect } from 'react'
import './JournalEntry.css'
import EntryDescription from '../EntryDescription/EntryDescription'
import EntryImage from '../EntryImage/EntryImage'

const JournalEntry = ({ journalEntries, setJournalEntries}) => {
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  const [currentEntryId, setCurrentEntryId] = useState(-1)
  
  return (
    <div className="entry-wrapper">
      <div className="entry-container">       
       {!descriptionComplete? 
        <EntryDescription 
          setDescriptionComplete={setDescriptionComplete} 
          setJournalEntries={setJournalEntries}
          setCurrentEntryId={setCurrentEntryId}
        />:
        <EntryImage 
          setJournalEntries={setJournalEntries}
          currentEntryId={currentEntryId}
          journalEntries={journalEntries}
        />} 
      </div>
    </div>
  )
}

export default JournalEntry;