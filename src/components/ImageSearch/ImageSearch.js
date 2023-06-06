import React, { useState, useEffect } from 'react'
import SearchImage from '../SearchImage/SearchImage';
import getImages from '../../apiCalls';

const ImageSearch = ({ searchValue }) => {
  const [searchResults, setSearchResults] = useState([])

  const getSearchImages = () => {
    getImages(searchValue)
      .then(data => {
        console.log(data.results)
        setSearchResults(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const resultImages = searchResults.map((result)=>{
    return <img className="result-image" key={result.id} src={result.urls.small} alt={result.alt_description} />
  })

  useEffect(() => {
    getSearchImages()
  }, [searchValue])

  return (
    <div>
      {resultImages}
    </div>
  )
}

export default ImageSearch;