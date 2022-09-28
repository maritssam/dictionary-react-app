import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container container-box">
        <img className="logo" src={Logo} alt="logo"></img>
        <Search />
        <footer>
          <a
            href="https://github.com/ilenia-n/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open-source code
          </a>{" "}
          by Ilenia
        </footer>
      </div>
    </div>
  );
}

export default App;
