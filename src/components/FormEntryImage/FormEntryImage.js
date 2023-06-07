import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import getImages from '../../apiCalls';
import './FormEntryImage.css'

const FormEntryImage = ({ currentEntryId, journalEntries, setJournalEntries }) => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedImage, setSelectedImage] = useState({})
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1)
  const [searchResults, setSearchResults] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const addImageToJournalEntry = () => {
    const updatedJournalEntries = journalEntries.map((entry) => {
      if (entry.id === currentEntryId) {
        const updatedEntry = { ...entry }
        updatedEntry.image.default = false
        updatedEntry.image.urls.regular = selectedImage.urls.regular;
        updatedEntry.image.urls.small = selectedImage.urls.small;
        updatedEntry.image.urls.thumb = selectedImage.urls.thumb;
        updatedEntry.image.urls.raw = selectedImage.urls.raw;
        updatedEntry.image.url.altText = selectedImage.alt_description;

        return updatedEntry
      }
      return entry;
    })
    setJournalEntries(updatedJournalEntries)
  }

  const getSearchImages = (event) => {
    event.preventDefault()
    setSelectedImageIndex(-1)
    getImages(searchValue)
      .then(data => {
        if (data.results.length < 1) {
          throw new Error('No images found')
        }
        setSearchResults(data.results)
        setError(null)
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const selectImage = (image, index) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
  }

  const handleSave = (event) => {
    event.preventDefault()
    addImageToJournalEntry()
    setSearchValue("")
    setSearchResults([])
    setSelectedImage({})
    setSelectedImageIndex(-1)
    setFormSubmitted(true)
  }

  const resultImages = searchResults.map((result, index) => {
    return (
      <label key={index + 1}>
        <input
          type="radio"
          name={"image " + (index + 1)}
          value={result}
          checked={selectedImageIndex === index}
          onChange={() => selectImage(result, index)} />
        <img
          className="result-image"
          key={result.id}
          src={result.urls.raw + '&h=550&dpr=2'}
          alt={result.alt_description} />
      </label>
    )
  })

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
          <button onClick={(event) => getSearchImages(event)} disabled={!searchValue}>Search</button>
        </div>
        <div>
          {formSubmitted && <Redirect to="/journal" />}
          {error && <p>{error}</p>}
          {resultImages}
          <button onClick={(event) => { handleSave(event) }}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default FormEntryImage;