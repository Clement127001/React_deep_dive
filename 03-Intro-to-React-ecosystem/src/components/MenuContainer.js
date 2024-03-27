import MenuItems from "./MenuItems";

const MenuContainer = ({ menus }) => {
  let data = menus?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  data = data.slice(2, data.length - 1);
  return (
    <div className="menu-container">
      <h2>Menus</h2>
      <div className="menu-items">
        {data.map((item, index) => (
          <MenuItems
            key={item?.card?.card.title + "-" + index}
            title={item?.card?.card.title}
            menus={item?.card?.card?.itemCards}
          />
        ))}
      </div>
    </div>
  );
  // 0 -> filter
  // last -> fssai
  // balance -> food
};

export default MenuContainer;
