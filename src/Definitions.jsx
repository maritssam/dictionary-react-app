import React from "react";

function Definitions(props) {
  console.log(props.definitions[0])
  return (
    <div className="Definitions">
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Definitions;