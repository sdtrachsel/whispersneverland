import React, { useState, useEffect } from 'react'
import './EntryImage.css'
import ImageSearch from '../ImageSearch/ImageSearch'


const EntryImage = ({ currentEntryId, journalEntries, setJournalEntries }) => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedImage, setSelectedImage] =useState("")
  return (
    <div className="img-entry-wrapper">
      <h1 className="img-entry-header">Select your Image</h1>

      <form >
        <h2 className='img-entry-sub-header'>Dream Details</h2>
        <div className='search-wrapper'>
          <input type="search"
            placeholder="Search for image....."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)} />
          </div>
        <ImageSearch searchValue={searchValue} />
      </form>
    </div>
  )
}

export default EntryImage;