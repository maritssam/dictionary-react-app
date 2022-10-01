import React from "react";
import "./Photos.css";


function Photos(props) {

  if (props.num > 0) {
    return (
      <div className="Photos shadow-sm rounded">
        <div className="row m-0">

          {props.photo.map((pic, index) => {
            return (
              <div className="col-md-4 p-1" key={index}>
                <a href={pic.src.original} target="_blank" rel="noopener noreferrer" title={pic.alt}>
                  <img className="img-fluid p-1" src={pic.src.landscape} alt={pic.alt} />
                </a>
              </div>)
          })}
        </div>
      </div>
    )

  } else {
    return null
  }
}

export default Photos;



