import React from "react";
import { Link } from "react-router-dom";
import "./JournalEntryCard.css"


const JournalEntryCard = ({ entry }) => {
  const imageSource = () => {
    if (entry.image.default) {
      return entry.image.urls.regular
    }
    return entry.image.urls.raw + "&h=175&dpr=2"
  }

  const entryTitle = () => {
    if (entry.title.length > 28) {
      return entry.title.slice(0, 25) + "..."
    }
    return entry.title
  }

   return (
    <Link className="card-link" to={`/${entry.id}`}  >
    <div className="card-container">
      <img className="card-img" src={imageSource()} alt={entry.image.urls.altText} />
      <div className="overlay-title">{entryTitle()}</div>
      <div className="overlay-date">{entry.displayDate}</div>
    </div>
    </Link>
  )
}

export default JournalEntryCard;