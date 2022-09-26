import React from "react";

function Icon(props) {

  if (props.audio) {
    return <i className="fa-solid fa-volume-high"> </i>
  } else {
    return null
  }

}

export default Icon;