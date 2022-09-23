import React from "react";

function Definitions(props) {
  console.log(props.definitions)
  return (
    <div className="Definitions">
     <h3>{props.definitions.partOfSpeech}</h3>
     {/* <p>{props.definitions[0].definition}</p>
     <p>{props.definitions[0].example}</p> */}
    </div>
  )
}

export default Definitions;