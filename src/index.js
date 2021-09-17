import React from "react";
import ReactDOM from "react-dom";
import { LP } from "./lp";
// import { Section } from "./obsv";
// import styled from "styled-components";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <LP />
      {/* <Section>
        <h2>Hello Animation</h2>
      </Section> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
