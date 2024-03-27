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
import Menu, { loader as menuLoader } from "./src/components/Menus";

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
      {
        path: "/restaurants/:resId",
        element: <Menu />,
        loader: menuLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={route} />);
