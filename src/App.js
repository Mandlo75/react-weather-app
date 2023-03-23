import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/sukoluhle-sifani-73b42519a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Sukoluhle Sifani
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mandlo75/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
