import React, { useState } from "react";
import Icon from "./Icon";

function Phonetics(props) {
  let [audio, setAudio] = useState(false);

  function handleAudio(event) {
    event.preventDefault();
    setAudio(true);
    audio = new Audio(props.phonetics.audio);
    audio.play()
  }


if (props.phonetics){
  return (
    <div className="Phonetics">
      <a href="/" onClick={handleAudio}><Icon audio={props.phonetics.audio}/></a>
      <div>{props.phonetics.text}</div>
    </div>
  )} else{
    return null
  }

}

export default Phonetics;