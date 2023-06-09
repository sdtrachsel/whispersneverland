const getImages = (searchCriteria) => {
   const baseURL = 'https://api.unsplash.com/search/photos?page=1&query=';

  const accessKey = process.env.REACT_APP_API_KEY
  
  if(!searchCriteria) throw new Error ("No search criteria provided")

  return fetch(baseURL + searchCriteria + '&per_page=6&orientation=squarish&client_id=' + accessKey)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Someting went wrong. Please try again later.')
      }
      return res.json()
    })
  }


export default getImages;