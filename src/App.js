import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container container-box">
        <div className="container">
          <a href="/">
            <img
              className="logo img-fluid"
              src={Logo}
              alt="logo"
              title="Dictionary logo"
            ></img>
          </a>
        </div>
        <Search />
        <footer>
          This project was coded by Marti Med and is
          <a
            href="https://github.com/maritssam/dictionary-react-app/edit/main/src/App.js"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to the project code on Ilenia's GitHub"
          >
            {" "}
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
