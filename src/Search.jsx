import React, { useState } from "react";
import Results from "./Results";
import Rejected from "./Rejected";
import axios from "axios";


function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [rejected, setRejected] = useState(false);

  function getDefinition(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function onRejectedDefinition(response) {
    console.log(response)
    setRejected(true);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURl).then(getDefinition, onRejectedDefinition);
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
      <Rejected rejected={rejected} />
    </div>
  )
}

export default Search;