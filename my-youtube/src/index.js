import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import appStore from "./utils/Store/appStore";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";
import SearchResults from "./Components/SearchResults";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

//the idea is to store the data on to the store
