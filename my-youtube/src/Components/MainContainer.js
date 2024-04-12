import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
const MainContainer = () => {
  return (
    <div className="flex relative">
      <SideBar />
      <Body />
    </div>
  );
};

export default MainContainer;
