import React, { useState } from 'react'
import "./JournalEntry.css"
import { Redirect } from "react-router-dom";

const JournalEntry = ({ entryId, journalEntries }) => {
  const [redirectToForm, setRedirectToForm] = useState(false);
  const selectedEntry = journalEntries.find(entry => Number(entryId) === entry.id)

  const imageSrc = () => {
    if (selectedEntry.image.default) {
      return selectedEntry.image.urls.regular
    }
    return selectedEntry.image.urls.raw
  }

  const addImage = () => {
    setRedirectToForm(true);
  };

  if (redirectToForm) {
    return <Redirect to={{ 
      pathname: "/newentry", 
      state: { 
        currentEntryId: selectedEntry.id,
        descriptionComplete: true,
       } 
      }} />
  }

  const renderContent = () => {
    if (!selectedEntry) {
      return <p>loading</p>
    }

    return (
      <>
        <img src={imageSrc()} alt={selectedEntry.image.urls.altText} />
        <h1>{selectedEntry.title}</h1>
        {selectedEntry && selectedEntry.image.default &&
          <button onClick={addImage}>Add Image</button>
        }
        <p>Date: {selectedEntry.displayDate}</p>
        <p>{selectedEntry.description}</p>
      </>
    )
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default JournalEntry;