import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./src/Main";

const App = () => (
  <>
    <Main />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
