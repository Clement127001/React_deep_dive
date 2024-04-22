import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import App from "./App";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);
root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);