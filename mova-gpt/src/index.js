import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import App from "./App";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";
import MovieDetailsContainer from "./components/MovieDetailsContainer";
import "./index.css";
import WatchLater from "./components/WatchLater";

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
        path: "/movie/:movieId",
        element: <MovieDetailsContainer />,
      },
      {
        path: "/movie/watch-later",
        element: <WatchLater />,
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
