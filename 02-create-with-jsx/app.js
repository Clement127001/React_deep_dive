import React from "react";
import ReactDOM from "react-dom/client";

//adding it using the jsx syntax
const heading = React.createElement(
  "h1",
  {},
  "This is the heading using react element"
);

//using functional component
const Header = () => (
  <div>
    {heading}
    <p>This is the paragraph</p>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Header></Header>);
