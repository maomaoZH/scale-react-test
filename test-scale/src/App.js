import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("handle click");
  };
  return (
    <scale-app-shell>
      <scale-app-header slot="header"></scale-app-header>
      <div>
        <a href={"/"}>Startseite</a> <a href="/a">A</a> <a href={`/a/b`}>B</a>
        <scale-breadcrumb>
          <a href={"/#a"}>A</a> <a href="/#b">B</a>{" "}
          <a href={`/#a/b`}>A and B</a>
        </scale-breadcrumb>
        <scale-breadcrumb separator="---">
          <span onClick={handleClick}>First link</span>
          <span onClick={handleClick}>Second link</span>
          <span onClick={handleClick}>Third link</span>
        </scale-breadcrumb>
      </div>
      <scale-app-footer slot="footer"></scale-app-footer>
    </scale-app-shell>
  );
}

export default App;
