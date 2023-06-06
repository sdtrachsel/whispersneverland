import React, { useState, useEffect } from 'react'
import './JournalEntry.css'
import EntryDescription from '../EntryDescription/EntryDescription'
import EntryImage from '../EntryImage/EntryImage'

const JournalEntry = ({setJournalEntries}) => {
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  // const [imageComplete, setImageComplete] = useState(false)
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
          setImageComplete={setImageComplete} 
          setJournalEntries={setJournalEntries}
          currentEntryId={currentEntryId}
        />} 
      </div>
    </div>
  )
}

export default JournalEntry;