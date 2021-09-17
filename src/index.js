import React from "react";
import ReactDOM from "react-dom";
import Component from "./obsv";
// import styled from "styled-components";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <h1>useIntersect Example</h1>
      <h2>Start scroling to see some magic happen!</h2>
      <Component />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
