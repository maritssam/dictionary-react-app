import React from "react";

function Synonyms(props) {

  if (props.synonyms) {
    return (<div className="Synonyms">
      <span id={props.key}>
        {props.synonyms}
      </span>
    </div>
    )
  } else {
    return null
  }

}

export default Synonyms;