import React from "react";
import "./Synonyms.css";

function Synonyms(props) {

  // function to pass data to Search, parent component
  function onSynonymClicked(event) {
    event.preventDefault();
    props.setRelatedKeyword(props.synonyms);
  }

  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <button href="/" onClick={onSynonymClicked} title={`Search for ${props.synonyms} definition`}>
          {props.synonyms}
        </button>
      </span>
    )
  } else {
    return null;
  }
};


export default Synonyms;
