import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import getImages from '../../apiCalls';

const ImageSearch = ({ searchValue, setSearchValue, selectedImageIndex, setSelectedImage, setSelectedImageIndex, addImageToJournalEntry }) => {
  const [searchResults, setSearchResults] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const getSearchImages = (event) => {
    event.preventDefault()
    getImages(searchValue)
      .then(data => {
        console.log(data.results)
        setSearchResults(data.results)
        setError(null)
      })
      .catch(err => {
        setError('Failed to fetch images.');
        console.log(err)
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
          name="image-one"
          value={result}
          checked={selectedImageIndex === index}
          onChange={() => selectImage(result, index)} />
        <img
          className="result-image"
          key={result.id}
          src={result.urls.small}
          alt={result.alt_description} />
      </label>

    )
  })


  return (
    <div>
      {formSubmitted && <Redirect to="/journal" />}
      {error && <p>{error}</p>}
      <button onClick={(event)=>getSearchImages(event)} disabled={!searchValue}>Search</button>
      {resultImages}
      <button onClick={(event) => { handleSave(event) }}>Save</button>
    </div>
  )
}

export default ImageSearch;