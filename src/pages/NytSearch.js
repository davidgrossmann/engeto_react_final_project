import { useEffect, useState } from "react";
import NytSearchResult from "../components/NytSearchResult";
import "./NytSearch.css";

const NytSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [term, setTerm] = useState("");
  const [noresult, setNoresult] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setSearchedTerm(term);
    setTerm("");
  };

  useEffect(() => {
    setSearchResults([]);

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedTerm}&api-key=kF5neFdAJbfD3DbuuXYopll4pso6SxJw`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.response.docs.length === 0) {
          setNoresult("No results! Try something else.");
        } else {
          setSearchResults(data.response.docs);
          setNoresult("");
        }
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setNoresult("Error fetching data. Please try again later.");
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
          <p>
            {" "}
            Searched term is: <strong>{searchedTerm}</strong>{" "}
          </p>
        ) : (
          <p>Input term!</p>
        )}
        {noresult ? (
          <p>
            <strong>{noresult}</strong>
          </p>
        ) : null}
      </div>

      <NytSearchResult
        searchResult={searchResults[0]}
        searchResults={searchResults}
        searchedTerm={searchedTerm}
      />
    </div>
  );
};

export default NytSearch;
