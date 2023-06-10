import React, { useState } from 'react';
import './FormEntryDetail.css';
import PropTypes from "prop-types";

const FormEntryDetail = ({ setCurrentEntryId, setJournalEntries, setDescriptionComplete }) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [dateError, setDateError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const formattedDate = () => {
    const [year, month, day] = date.split("-");
    return `${month}.${day}.${year}`;
  }

  const createJournalEntry = () => {
    let newEntry = {
      id: Date.now(),
      title: title,
      calendarDate: date,
      displayDate: formattedDate(),
      description: description,
      image: {
        default: true,
        urls: {
          altText: "Whispers From Neverland with moon",
          regular: "https://i.imgur.com/6b9hrSL.png",
          small: "",
          thumb: "",
          raw: ""
        },
      }
    }

    return newEntry
  }

  const handleSave = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDateError(false);
    setDescriptionError(false);

    if (!title) setTitleError(true);
    if (!date) setDateError(true);
    if (!description) setDescriptionError(true);

    if (title && date && description) {
      let newEntry = createJournalEntry();
      setJournalEntries((prevEntries) => {
        let updatedEntries = [...prevEntries, newEntry]
        return updatedEntries.sort((a, b) => new Date(b.calendarDate) - new Date(a.calendarDate))
      })
      setCurrentEntryId(newEntry.id)
      setTitle("")
      setDate("")
      setDescription("")
      setDescriptionComplete(true)
      setTitleError(false)
      setDateError(false)
      setDescriptionError(false)
    }
  }

  return (
    <section className="entry-descrip-wrapper">
      <h1 className="entry-header">Journal Entry</h1>
      <form onSubmit={(event) => handleSave(event)}>
        <h2 className="entry-sub-header">Dream Details</h2>
        <div className="title-wrapper">
          <label htmlFor="title-input">Dream Title:</label>
          <input
            className={`title-input ${titleError ? 'error' : ''}`}
            id="title-input"
            type="text"
            value={title}
            size={50}
            maxLength={50}
            onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="date-wrapper">
          <label htmlFor="date-input">Date:</label>
          <input
            className={`date-input ${dateError ? 'error' : ''}`}
            id="date-input"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="descript-wrapper">
          <label htmlFor="description-input">Description:</label>
          <textarea
            className={`descript-input ${descriptionError ? 'error' : ''}`}
            id="description-input"
            value={description}
            onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div className="save-wrapper">
          <input
            className="standard-btn"
            type="submit"
            value={"Save"} />
        </div>
      </form>
    </section>
  )
}

FormEntryDetail.propTypes = {
  setCurrentEntryId: PropTypes.func.isRequired,
  setJournalEntries: PropTypes.func.isRequired,
  setDescriptionComplete: PropTypes.func.isRequired
};

export default FormEntryDetail;