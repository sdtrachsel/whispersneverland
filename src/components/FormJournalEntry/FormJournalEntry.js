import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './FormJournalEntry.css'
import FormEntryDetail from '../FormEntryDetail/FormEntryDetail'
import FormEntryImage from '../FormEntryImage/FormEntryImage'

const FormJournalEntry = ({ journalEntries, setJournalEntries}) => {
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  const [currentEntryId, setCurrentEntryId] = useState(-1)
  
  const location = useLocation();

  useEffect(() => {
    if(location.state?.currentEntryId) {
        setDescriptionComplete(true);
        setCurrentEntryId(location.state.currentEntryId);
    }
  }, [location.state?.currentEntryId]);

  return (
    <div className="entry-wrapper">
      <div className="entry-container">       
       {!descriptionComplete? 
        <FormEntryDetail
          setDescriptionComplete={setDescriptionComplete} 
          setJournalEntries={setJournalEntries}
          setCurrentEntryId={setCurrentEntryId}
        />:
        <FormEntryImage 
          setJournalEntries={setJournalEntries}
          currentEntryId={currentEntryId}
          journalEntries={journalEntries}
        />} 
      </div>
    </div>
  )
}

export default FormJournalEntry;