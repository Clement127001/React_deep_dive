import React from "react";

const SideBarItem = ({ name, to, src }) => {
  return (
    <a href={to} className="flex items-center justify-between">
      <img src={src} alt="home" width={30} />
      <p className="font-semibold text-lg">{name}</p>
    </a>
  );
};

export default SideBarItem;
