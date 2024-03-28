import MenuItem from "./MenuItem";

const MenuItems = ({ menus, title }) => {
  return (
    menus && (
      <div className="menu-item">
        <h2 className="heading">
          {title + " -  "}
          <span>{menus.length}</span>
        </h2>
        {menus.map((item) => (
          <MenuItem dish={item?.card?.info} key={item?.card?.info.id} />
        ))}
      </div>
    )
  );
};

export default MenuItems;
