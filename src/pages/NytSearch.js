import { useEffect, useState } from 'react'
import NytSearchResult from '../components/NytSearchResult'
import './NytSearch.css'




const NytSearch = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchedTerm, setSearchedTerm] = useState('');
  const [term, setTerm] = useState('');


  const formSubmit = (event) => {
    event.preventDefault()
    console.log(term);
    setSearchedTerm(term);
    setTerm('');

  }



  useEffect(() => {
    console.log('useeffect ' + searchedTerm);
    setSearchResults([])

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedTerm}&api-key=kF5neFdAJbfD3DbuuXYopll4pso6SxJw`;



    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.response.docs);
      })

      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchedTerm]);




  return (


    <div>
      <div className="nytsearch-top">
        <h1>NYTimes search</h1>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Searched term"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button>Search</button>
        </form>
        {searchedTerm ? (
          <p> Searched term is: <strong>{searchedTerm}</strong> </p>
        ) : (
          <p>Input term!</p>
        )}
      </div>

      <NytSearchResult
        searchResult={searchResults[0]}
        searchResults={searchResults}
        searchedTerm={searchedTerm}
      />








    </div>

  )
}

export default NytSearch
