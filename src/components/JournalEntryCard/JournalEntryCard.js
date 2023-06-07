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
    if (entry.title.length > 28) {
      return entry.title.slice(0, 25) + "..."
    }
    return entry.title
  }

   return (
    <div className="card-container">
      <img className="card-img" src={imageSource()} alt={entry.image.urls.altText} />
      <div className="overlay-title">{entryTitle()}</div>
      <div className="overlay-date">{entry.displayDate}</div>
    </div>
  )
}

export default JournalEntryCard;