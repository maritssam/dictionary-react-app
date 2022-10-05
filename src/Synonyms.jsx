import React from "react";

function Synonyms(props) {

  const onSynonymClicked = (evt) => {
    evt.preventDefault();
    props.passSynonymToMeanings(props.synonyms);
  }

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <a href="/" onClick={onSynonymClicked}>
            {props.synonyms}
        </a>
      </div>
    )
  } else {
    return null
  }
}


export default Synonyms;
