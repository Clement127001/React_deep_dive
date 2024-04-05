import React from "react";
import { Outlet } from "react-router-dom";
import { LoginProvider } from "./utils/store/loginContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Main() {
  return (
    <LoginProvider>
      <div className="restaurant-container">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </LoginProvider>
  );
}

export default Main;
