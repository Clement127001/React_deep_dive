import React from "react";
import ReactDOM from "react-dom/client";

//creating the react element using JSX(html or more like xml syntax)

//JSX -> transpiled by babel -> React.createElement() -> ReactElement -> render -> html element
const heading = (
  <h1 id="heading" className="header">
    Welcome to react with jsx
  </h1>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
