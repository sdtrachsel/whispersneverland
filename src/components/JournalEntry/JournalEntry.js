import React, { useState, useEffect } from 'react'
import './JournalEntry.css'
import EntryDescription from '../EntryDescription/EntryDescription'
import EntryImage from '../EntryImage/EntryImage'

const JournalEntry = () => {
  const [descriptionComplete, setDescriptionComplete] = useState(false)
  const [imageComplete, setImageComplete] = useState(false)
  return (
    <div className="entry-wrapper">
      <div className="entry-container">
        
       {descriptionComplete? <EntryImage />: <EntryDescription />} 
      </div>
    </div>
  )
}

export default JournalEntry;