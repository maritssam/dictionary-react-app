import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";


function Meanings(props) {

  return (
    <div className="Definitions">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p> 
              Definition: {definition.definition}
            </p>
              <Example example={definition.example} />
          </div>
        )
      })}

      {props.meanings.synonyms.map((synonym, index) => {
        if (synonym) {
          return (
            <ul key={index}>
             <li> <Synonyms synonyms={synonym} /></li>
            </ul>
          )
        } else {
          return null
        }

      })}
    </div>
  )

}

export default Meanings;