import React from "react";
import "./JournalEntryCard.css"


const JournalEntryCard = ({ entry }) => {
  const imageSource = () => {
    if (entry.image.default) {
      return entry.image.urls.regular
    }
    return entry.image.urls.raw + "&h=550&dpr=2"
  }

  const entryTitle = () => {
    console.log('entry', entry.title, entry.title.length)
    if (entry.title.length > 28) {
      return entry.title.slice(0, 25) + "..."
    }

    return entry.title
  }

  const entryDate = () => {
    let datePieces = entry.date.split('-')
    return datePieces[1] + '.' + datePieces[2] + '.' + datePieces[0]
  }

  return (
    <div className="card-container">
      <img className="card-img" src={imageSource()} alt={entry.image.urls.altText} />
      <div className="overlay-title">{entryTitle()}</div>
      <div className="overlay-date">{entryDate()}</div>
    </div>
  )
}

export default JournalEntryCard;