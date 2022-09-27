import React, { useState } from "react";
import Icon from "./Icon";

function Phonetics(props) {
  const [audio, setAudio] = useState(null);

  
  function handleAudio(event) {
    event.preventDefault();
    setAudio(props.audio);
    let sound = new Audio(audio);
    sound.play()
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={handleAudio}><Icon audio={props.audio}/></a>
      <div>{props.text}</div>
    </div>
  )
}

export default Phonetics;