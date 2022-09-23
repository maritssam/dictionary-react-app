import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";


function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function getDefinition(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURl).then(getDefinition)
  }

  function captureKeyword(event) {
    console.log(event.target.value)
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={searchWord}>
        <input type="search" placeholder="search for a word..." onChange={captureKeyword} />
        <input type="submit" value="Search" />
      </form>
      <Results response={results} />
    </div>
  )
}

export default Search;