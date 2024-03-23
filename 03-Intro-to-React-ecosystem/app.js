import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/Main";
import About from "./src/components/About";
import ErrorComponent from "./src/components/ErrorComponent";

const App = () => (
  <>
    <Main />
  </>
);

//configuration
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={route} />);
