import React, { useState, useEffect } from 'react'
import './EntryDescription.css'

const EntryDescription = () => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const handleSave = (event) => {
    event.preventDefault()
  }

  return (
    <section className="entry-descrip-wrapper">
      <h1 className="entry-header">New Journal Entry</h1>
      <form>
        <h2 className='entry-sub-header'>Dream Details</h2>
        <div className='title-wrapper'>
          <label>Dream Title:</label> 
          <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        </div>
        <div className="date-wrapper">
          <label>Date:</label> 
          <input type="date" value={date} onChange={(event)=>setDate(event.target.value)} />
        </div>
        <div className="descript-wrapper">
          <label>Description:</label>
          <textarea className="descript-input" value={description} onChange={(event)=>setDescription(event.target.value)} onKeyDown={(event)=>handleDescripKeyDown(event)}/>
        </div>
        <div className="save-wrapper">
        <input className="standard-btn" type="submit" value={'Save'} />
        </div>
      </form>
    </section>
  )
}

export default EntryDescription;