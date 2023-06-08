import React from "react";
import "./JournalEntry.css"
import { render } from "@testing-library/react";

const JournalEntry = ({ entryId, journalEntries }) => {

  const selectedEntry = journalEntries.find(entry => Number(entryId) === entry.id)


  const imageSrc = () => {
    if (!selectedEntry) return null

    if (selectedEntry.image.default) {
      return selectedEntry.image.urls.regular
    }
    return selectedEntry.image.urls.raw
  }

  const renderContent = () => {
    if (!selectedEntry) {
      return <p>loading</p>
    }

    return (
      <>
        <img src={imageSrc()} alt={selectedEntry.image.urls.altText} />
        <h1>{selectedEntry.title}</h1>
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