import React, { useState} from 'react'
import './EntryImage.css'
import ImageSearch from '../ImageSearch/ImageSearch'

const EntryImage = ({ currentEntryId, journalEntries, setJournalEntries }) => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedImage, setSelectedImage] = useState({})
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1)

  const addImageToJournalEntry = () => {
    const updatedJournalEntries = journalEntries.map((entry) => {
      if(entry.id === currentEntryId){
        console.log(selectedImage)
        const updatedEntry = {...entry}
        updatedEntry.image.default = false
        updatedEntry.image.urls.regular = selectedImage.urls.regular;
        updatedEntry.image.urls.small= selectedImage.urls.small;
        updatedEntry.image.urls.thumb= selectedImage.urls.thumb;
        updatedEntry.image.altText=selectedImage.alt_description;

        return updatedEntry
      }
      return entry;
    })
    setJournalEntries(updatedJournalEntries)
  }

  return (
    <div className="img-entry-wrapper">
      <h1 className="img-entry-header">Select your Image</h1>
      <form >
        <h2 className='img-entry-sub-header'>Dream Details</h2>
        <div className='search-wrapper'>
          <label htmlFor='search'> Search: </label>
          <input
            id='search'
            type="search"
            placeholder="Search for image....."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)} />
        </div>
        <ImageSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSelectedImage={setSelectedImage}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          addImageToJournalEntry={addImageToJournalEntry} />
      </form>
    </div>
  )
}

export default EntryImage;