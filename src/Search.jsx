import React, { useState } from "react";
import Results from "./Results";
import Rejected from "./Rejected";
import "./Search.css";
import axios from "axios";


function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [rejected, setRejected] = useState(false);

  function getDefinition(response) {
    setResults(response.data[0]);
    setRejected(false)
  }

  function onRejectedDefinition() {
    setRejected(true);
    setResults(null)
  }

  function searchWord(event) {
    event.preventDefault();
    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURl).then(getDefinition, onRejectedDefinition);
  }

  function captureKeyword(event) {
    setKeyword(event.target.value);
  }

  

  return (
    <div className="Search">
      <h1>What word do you want to look up?</h1>
      <form onSubmit={searchWord}>
        <div className="form-group">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <input className="form-control search-box rounded" type="search" placeholder="search for a word..." onChange={captureKeyword} />
              </div>
              <div className="col-2 p-0">
                <button className="btn btn-branding shadow-sm" type="submit">Search </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Results response={results} />
      <Rejected rejected={rejected} />
    </div>
  )
}

export default Search;