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
  const [numberOfPics, setNumbersOfPics] = useState(null);

  const doRelatedKeywordSearch = (word) => {
    console.log("doRelatedKeywordSearch -> ", word);
    callApi(word);
  };

  function showPics(response) {
    console.log("showPics -> ", response);
    setPhoto(response.data.photos);
    setNumbersOfPics(response.data.total_results);
  }

  function getDefinition(response) {
    console.log("getDefinition -> ", response);
    setResults(response.data[0]);
    setRejected(false)
  }

  function onRejectedDefinition() {
    console.log("onRejectedDefinition");
    setRejected(true);
    setResults(null)
  }

  function searchWord(event) {
    console.log("searchWord -> ", event);
    event.preventDefault();
    callApi()
  }

  function callApi(word) {
    console.log("callApi -> ", keyword);

    let searchKeyword = keyword;

    if (word != null) {
      searchKeyword = word;
    }

    let apiURl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchKeyword}`;
    axios(apiURl).then(getDefinition, onRejectedDefinition);

    let pexelsApiKey = "563492ad6f9170000100000165be361af0ee446ca672fa73859a372b";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${searchKeyword}&per_page=3`
    axios.get(pexelsApiURL, { headers: headers }).then(showPics);
  }

  function captureKeyword(event) {
    console.log("captureKeyword -> ", event);
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
      <Results response={results} photo={photo} num={numberOfPics} doRelatedKeywordSearch={doRelatedKeywordSearch} />
      <Rejected rejected={rejected} />
    </div>
  )

}

export default Search;