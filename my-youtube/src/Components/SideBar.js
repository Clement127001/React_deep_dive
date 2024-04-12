import React from "react";
import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";

import { sidebarItemExplore, sidebarItemMain } from "../utils/constants";

const SideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.side);

  if (!isSideBarOpen) return null;

  return (
    <aside className={`my-10 px-4 min-w-[250px] overflow-scroll slide-in`}>
      <div className=" flex flex-col gap-6 border-solid border-b-2 pb-4">
        {sidebarItemMain.map(({ name, to, src }) => (
          <SideBarItem name={name} to={to} src={src} key={name} />
        ))}
      </div>

      <div className=" flex flex-col gap-6 border-solid border-b-2 pb-4 mt-10">
        {sidebarItemExplore.map(({ name, to, src }) => (
          <SideBarItem name={name} to={to} src={src} key={name} />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
