import React, {useState} from "react";

function Search (){
    const [keyword, setKeyword] = useState(null);

    function searchWord(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}..`);
    }

    function captureKeyword(event){
        console.log(event.target.value)
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={searchWord}>
                <input type="search" placeholder="search for a word..." onChange={captureKeyword}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;