import React from "react";
import Meanings from "./Meanings";

function Results(props) {

  if (props.response) {

    let meaning = props.response.meanings;

    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
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