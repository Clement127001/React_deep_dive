import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/Main";
import Restaurants, {
  loader as restaurantsLoader,
} from "./src/components/Restaurants";
import About from "./src/components/About";
import ErrorComponent from "./src/components/ErrorComponent";
import Contact from "./src/components/Contact";

//configuration
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Restaurants />,
        loader: restaurantsLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={route} />);
