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
    return (
      <div className="single-wrapper">
        <div className="single-top-container">
          <div className="top-lft-wrapper">
            <img className="single-img" src={imageSrc()} alt={selectedEntry.image.urls.altText} />
            {selectedEntry && selectedEntry.image.default &&
              <button className="add-img-btn" onClick={addImage}>Add Image</button>
            }
          </div>
          <div className="top-rt-wrapper">
            <p className="single-date">Date: {selectedEntry.displayDate}</p>
            <h1 className="single-title">{selectedEntry.title}</h1>
          </div>
        </div>
        <p className="single-desc">{selectedEntry.description}</p>
      </div>
    )
  }

  return (
    <section className="single-container">
      {renderContent()}
    </section>
  )
}

export default JournalEntry;