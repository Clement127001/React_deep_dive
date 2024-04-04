import React from "react";
import { Outlet } from "react-router-dom";
import { LoginProvider } from "./utils/store/loginContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Main() {
  return (
    <div className="restaurant-container">
      <LoginProvider>
        <Header />
        <Outlet />
      </LoginProvider>

      {/* <Footer /> */}
    </div>
  );
}

export default Main;
