import React from "react";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";

function Main() {
  return (
    <div className="restaurant-container">
      <Header />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default Main;
