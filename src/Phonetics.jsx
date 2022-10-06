import React from "react";

import "./Phonetics.css";

function Phonetics(props) {

  function handleAudio(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetics.audio);
    audio.play()
  }

  if (props.phonetics.audio) {
    return (
      <span className="Phonetics">
        <a href="/" onClick={handleAudio} title="Play pronunciation"><i className="fa-solid fa-volume-high"></i></a>
        <span className="phonetics-text">{props.phonetics.text}</span>
      </span>
    )
  } else if (props.phonetics.text) {
    return (
      <span className="Phonetics">
        <i className="fa-solid fa-volume-xmark grey-out" title="Not available"></i>
        <span className="phonetics-text">{props.phonetics.text}</span>
      </span>
    )
  } else {
    return null;
  }
};


export default Phonetics;