import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/Main";
import Restaurants, {
  loader as restaurantsLoader,
} from "./src/components/Restaurants";
import ErrorComponent from "./src/components/ErrorComponent";
import Contact from "./src/components/Contact";
import Menu, { loader as menuLoader } from "./src/components/Menus";
import Login from "./src/components/Login";

const About = lazy(() => import("./src/components/About"));

//configuration for client side routing
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
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
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
