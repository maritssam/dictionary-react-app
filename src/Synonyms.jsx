import React from "react";

function Synonyms(props) {

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>
          {props.synonyms}
        </span>
      </div>
    )
  } else {
    return null
  }

}

export default Synonyms;