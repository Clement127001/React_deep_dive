import { useState } from "react";
import MenuItem from "./MenuItem";
import { arrowDown, arrowUp } from "../asset";

const MenuItems = ({ menus, title, showItems, changeShowItems, idx }) => {
  const handleToggle = () => {
    changeShowItems();
  };
  return (
    menus && (
      <div className="menu-item shadow-lg">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={handleToggle}
        >
          <h2 className="font-sans text-xl font-semibold">
            {title + " ("}
            <span>
              {menus.length}
              {") "}
            </span>
          </h2>

          <div className="transition-all">
            {showItems === idx ? (
              <img src={arrowDown} alt="show-menus" width={24} />
            ) : (
              <img src={arrowUp} alt="hide-menus" width={24} />
            )}
          </div>
        </div>

        {showItems === idx &&
          menus.map((item) => (
            <MenuItem dish={item?.card?.info} key={item?.card?.info.id} />
          ))}
      </div>
    )
  );
};

export default MenuItems;
