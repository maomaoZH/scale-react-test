import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href={"/"}>Startseite</a> <a href="/a">A</a> <a href={`/a/b`}>B</a>
      <scale-breadcrumb>
        <a href={"/"}>Startseite</a> <a href="/#a">A</a> <a href={`/#a/b`}>B</a>
      </scale-breadcrumb>
      <scale-breadcrumb separator="---">
        <a href="#1">First link</a>
        <a href="#2">Second link</a>
        <a href="#3">Third link</a>
      </scale-breadcrumb>
      {/* <Routes>
        <Route path="/a/b/c" children={() => <p>A B C</p>} />
        <Route path="/a/b" children={() => <p>A B</p>} />
        <Route path="/a" children={() => <p>A</p>} />
        <Route path="/" children={() => <p>Startseite</p>} />
      </Routes> */}
    </div>
  );
}

export default App;
