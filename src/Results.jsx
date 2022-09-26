import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";


function Results(props) {

  if (props.response) {

    let meaning = props.response.meanings;

    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
        <Phonetics audio={props.response.phonetics[0].audio} text={props.response.phonetics[0].text} />

        {meaning.map(function (meanings, index) {
          return <div key={index}>
            <Meanings meanings={meanings} />
          </div>
        })
        }
      </div>
    )
  } else {
    return null
  }

}

export default Results;