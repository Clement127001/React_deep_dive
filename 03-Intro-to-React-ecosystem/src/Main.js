import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Main() {
  return (
    <Provider store={appStore}>
      <div className="restaurant-container">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default Main;
