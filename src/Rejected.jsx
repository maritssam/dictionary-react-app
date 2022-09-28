import React from "react";

function Rejected(props){
   if (props.rejected) {
       return (
           <div className="Rejected">
               <p>The word you entered is not in the dictionary. Check for spelling and try again using the search bar above.</p>
           </div>
       )
   } else {
       return null
   }
}

export default Rejected;