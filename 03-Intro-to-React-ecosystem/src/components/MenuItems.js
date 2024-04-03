import { useState } from "react";
import MenuItem from "./MenuItem";
import { arrowDown, arrowUp } from "../asset";

const MenuItems = ({ menus, title }) => {
  const [showItems, setShowItems] = useState(true);

  const handleToggle = () => {
    setShowItems((prev) => !prev);
  };
  return (
    menus && (
      <div className="menu-item ">
        <div
          className="flex justify-between mb-4 cursor-pointer items-center"
          onClick={handleToggle}
        >
          <h2 className="font-sans text-xl font-semibold">
            {title + " -  "}
            <span>{menus.length}</span>
          </h2>

          <div className=" transition-all">
            {showItems ? (
              <img src={arrowDown} alt="show-menus" width={24} />
            ) : (
              <img src={arrowUp} alt="hide-menus" width={24} />
            )}
          </div>
        </div>

        {showItems &&
          menus.map((item) => (
            <MenuItem dish={item?.card?.info} key={item?.card?.info.id} />
          ))}
      </div>
    )
  );
};

export default MenuItems;
