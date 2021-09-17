import React from "react";

export const FirstView: React.FC = () => {
  return (
    <>
      <section id="first" className="section">
        <div className="section__container">
          <div className="layout-catch">
            <h2>First Section</h2>
            <p className="guide">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              et aut possimus rerum corporis minima rem nulla facilis
            </p>
            <div className="layout-links">
              <button>Infomation</button>
              <button>Get Item</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
