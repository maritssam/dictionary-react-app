import React from "react";
import Definitions from "./Definitions";

function Results(props) {

  if (props.response) {
    let meaning = props.response.meanings;
   
    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
        {meaning.map(function (definitions, index) {
          return <div key={index}>
           <Definitions definitions = {definitions} />
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