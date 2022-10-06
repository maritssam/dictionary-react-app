import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";


function Meanings(props) {

  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <hr />
      <div className="word-definition">
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

        {props.meanings.synonyms.length > 0 && <span className="similar-text">Similar:</span>}

        {props.meanings.synonyms.map((synonym, index) => {
          if (synonym) {
            return (
              <span key={index}>
                <Synonyms synonyms={synonym} setRelatedKeyword={props.setRelatedKeyword} />
              </span>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
};

export default Meanings;