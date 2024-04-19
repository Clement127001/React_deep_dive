import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import appStore from "./utils/Store/appStore";
import MainContainer from "./Components/MainContainer";

// import SearchResults from "./Components/SearchResults";
// import Watch from "./Components/Watch";
const Watch = lazy(() => import("./Components/Watch"));
const SearchResults = lazy(() => import("./Components/SearchResults"));

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
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <Watch />
          </Suspense>
          // <Watch />
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<p>Loading your search result</p>}>
            <SearchResults />
          </Suspense>
        ),
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
