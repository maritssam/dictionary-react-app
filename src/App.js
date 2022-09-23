import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container container-box">
        <h1 className="mb-5">Dictionary</h1>
        <Search />
        <footer>
          <a href="https://github.com/ilenia-n/dictionary-react-app"> Open-source code</a> by Ilenia
        </footer>
      </div>
    </div>
  );
}

export default App;
