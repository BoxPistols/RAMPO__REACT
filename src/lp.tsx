import React from "react";
import { Concept } from "./landing/concept";
import { FirstView } from "./landing/first-view";

export const LP: React.FC = () => {
  return (
    <div className="LP">
      <div>
        <div id="top" />
        <div className="wrap">
          <FirstView />
          <Concept />
          <div className="to-top">
            <a href="#top">Top</a>
          </div>
        </div>
      </div>
    </div>
  );
};
