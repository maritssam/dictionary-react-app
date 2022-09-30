import React from "react";


function Photos(props) {
  if (props.photo) {
    return (
      <div className="Photos">
        <div className="row">

          {props.photo.map((pic, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={pic.src.original} target="_blank" rel="noopener noreferrer" title={pic.alt}>
                  <img className="img-fluid shadow-sm rounded mb-3" src={pic.src.landscape} alt={pic.alt} />
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