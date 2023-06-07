import React, { useState } from 'react'
import './FormEntryDetail.css'

const FormEntryDetail = ({ setCurrentEntryId, setJournalEntries, setDescriptionComplete }) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const createJournalEntry = () => {
    let newEntry = {
      id: Date.now(),
      title: title,
      date: date,
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
    event.preventDefault()
    let newEntry = createJournalEntry()
    setJournalEntries((prevEntries) => [...prevEntries, newEntry])
    setCurrentEntryId(newEntry.id)
    setTitle("")
    setDate("")
    setDescription("")
    setDescriptionComplete(true)
  }

  return (
    <section className="entry-descrip-wrapper">
      <h1 className="entry-header">New Journal Entry</h1>
      <form onSubmit={(event) => handleSave(event)}>
        <h2 className="entry-sub-header">Dream Details</h2>
        <div className="title-wrapper">
          <label htmlFor="title-input">Dream Title:</label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="date-wrapper">
          <label htmlFor="date-input">Date:</label>
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="descript-wrapper">
          <label htmlFor="desciption-input">Description:</label>
          <textarea
            id="description-input"
            className="descript-input"
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

export default FormEntryDetail;