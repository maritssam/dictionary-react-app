import React, { useState } from "react";
import Icon from "./Icon";

function Phonetics(props) {
  let [audio, setAudio] = useState(false);

  function handleAudio(event) {
    event.preventDefault();
    setAudio(true);
    audio = new Audio(props.audio);
    audio.play()
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={handleAudio}><Icon audio={props.audio}/></a>
      <div>{props.text}</div>
    </div>
  )

}

export default Phonetics;