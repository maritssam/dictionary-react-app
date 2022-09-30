import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";


function Meanings(props) {

  return (
    <div className="Meanings">

      <h3>{props.meanings.partOfSpeech}</h3>
      <hr />
      <section className="word-definition">

        <ol>
          {props.meanings.definitions.map((definition, index) => {
            return (
              <li key={index}>
                {definition.definition}
                <Example example={definition.example} />
              </li>
            )
          })}
        </ol>

        {props.meanings.synonyms.length > 0 ? <span className="similar-text">Similar:</span> : null}

        {props.meanings.synonyms.map((synonym, index) => {
          if (synonym) {
            return (
              <ul key={index}>
                <li className="synonym"> <Synonyms synonyms={synonym} /></li>
              </ul>
            )
          } else {
            return null
          }

        })}
      </section>
    </div>
  )

}

export default Meanings;