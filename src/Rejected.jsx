import React from "react";
import NotFound from "./assets/notfound.png";
import "./Rejected.css";

function Rejected(props) {
  if (props.rejected) {
    return (
      <div className="Rejected shadow-sm rounded">
        <img src={NotFound} className="img-fluid" alt="Not Found, error 404" title="404, page not found" />
        <h2>Oops!</h2>
        <p> We can't find the word you entered. Check for spelling and try again using the search bar above.</p>
      </div>
    )
  } else {
    return null
  }
};

export default Rejected;