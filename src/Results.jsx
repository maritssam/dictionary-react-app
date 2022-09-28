import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";


function Results(props) {

  if (props.response) {

    let meaning = props.response.meanings;
    let phonetics = props.response.phonetics;

    return (
      <div className="Results">
       
        <h2>{props.response.word}</h2>

        {phonetics.map((phonetic, index)=> {
          return (
          <div key={index}>
            <Phonetics phonetics={phonetic}/>                              
            </div>
            ) 
        })}
 

        {meaning.map((meanings, index)=> {
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