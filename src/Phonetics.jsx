import React, { useState } from "react";

import "./Phonetics.css";

function Phonetics(props) {
  let [audio, setAudio] = useState(false);

  function handleAudio(event) {
    event.preventDefault();
    setAudio(true);
    audio = new Audio(props.phonetics.audio);
    audio.play()
  }

  if (props.phonetics.audio) {
    return (
      <span className="Phonetics">
        <a href="/" onClick={handleAudio}><i className="fa-solid fa-volume-high"></i></a>
        <span className="phonetics-text">{props.phonetics.text}</span>
      </span>
    )
  } else if (props.phonetics.text) {
    return (
      <span className="Phonetics">
        <i className="fa-solid fa-volume-xmark grey-out"></i>
        <span className="phonetics-text">{props.phonetics.text}</span>
      </span>
    )
  } else {
    return null
  }
}


export default Phonetics;