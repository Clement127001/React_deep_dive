const MenuItemShimmer = () => {
  return (
    <div className="animate-pulse flex w-full gap-[6rem] p-5 mb-6 bg-gray-50  rounded-2xl">
      <div className="w-[300px] h-[180px] bg-slate-400 rounded-2xl"></div>
      <div className="flex flex-col w-full gap-3 justify-center ">
        <div className="w-[30%] h-[1.5rem] bg-gray-500 rounded-md "></div>
        <div className="w-[80%] h-[1rem] bg-gray-500 rounded-md "></div>
        <div className="w-[20%] h-[1.5rem] bg-gray-500 rounded-md "></div>
        <div className="w-[10%] h-[1.5rem] bg-gray-500 rounded-md "></div>
      </div>
    </div>
  );
};

const MenuShimmer = () => {
  let MenuItemShimmers = [];

  for (i = 0; i < 3; i++) {
    MenuItemShimmers.push(<MenuItemShimmer key={"shimmer" + i} />);
  }
  return (
    <div className="flex  flex-col w-full items-center">
      <div className=" animate-pulse w-[600px] h-[660px] bg-gray-200 mt-12 mb-5 rounded-2xl">
        <div className="  h-[65%] bg-gray-500 m-5 rounded-2xl"></div>

        <div className="w-full m-10">
          <div className="w-[80%] h-[2rem] bg-gray-500 rounded-md mb-2"></div>
          <div className="w-[30%] h-[2rem] bg-gray-500 rounded-md mb-2"></div>
          <div className="w-[60%] h-[2rem] bg-gray-500 rounded-md mb-2"></div>
          <div className="w-[20%] h-[2rem] bg-gray-500 rounded-md mb-2"></div>
        </div>
      </div>

      <div className="mt-[10rem] w-[80%]  bg-gray-200 p-8 rounded-2xl">
        {MenuItemShimmers}
      </div>
    </div>
  );
};

export default MenuShimmer;
