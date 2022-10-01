import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import "./Results.css";


function Results(props) {
  if (props.response) {

    let meaning = props.response.meanings;
    let phonetics = props.response.phonetics;

    return (
      <div className="Results">
        <div className="word-result shadow-sm rounded">
          <h2>{props.response.word}</h2>

          {phonetics.map((phonetic, index) => {
            return (
              <span key={index}>
                <Phonetics phonetics={phonetic} />
              </span>
            )
          })}
        </div>

        {meaning.map((meanings, index) => {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          )
        })
        }

        <Photos photo={props.photo} num={props.num} />

      </div>
    )
  } else {
    return null
  }

}

export default Results;