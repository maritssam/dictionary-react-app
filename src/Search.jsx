import React, { useState } from "react";
import axios from "axios";


function Search() {
  const [keyword, setKeyword] = useState(null);

  function getDefinition(response) {
    console.log(response.data[0]);
    alert(response.data[0].meanings[0].definitions[0].definition)
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
    </div>
  )
}

export default Search;