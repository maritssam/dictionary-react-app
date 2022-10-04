import React, { useState } from "react";
import Results from "./Results";
import Rejected from "./Rejected";
import axios from "axios";
import "./Search.css";


function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [rejected, setRejected] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [numberOfPics, setNumbersOfPics] = useState(null)

  function showPics(response) {
    setPhoto(response.data.photos);
    setNumbersOfPics(response.data.total_results);
  }

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
    callApi()
  }

  function callApi() {
    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURl).then(getDefinition, onRejectedDefinition);

    let pexelsApiKey = "563492ad6f9170000100000165be361af0ee446ca672fa73859a372b";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`
    axios.get(pexelsApiURL, { headers: headers }).then(showPics);
  }

  function captureKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search" >
      <h1>What word do you want to look up?</h1>
      <form onSubmit={searchWord}>
        <div className="form-group">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <input className="form-control search-box rounded" type="search" placeholder="search for a word..." value={keyword} onChange={captureKeyword} />
              </div>
              <div className="col-2 p-0">
                <button className="btn btn-branding shadow-sm" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Results response={results} photo={photo} num={numberOfPics} />
      <Rejected rejected={rejected} />
    </div>
  )

}

export default Search;