const SearchItemShimmer = () => {
  return (
    <div className="w-full m-7 flex gap-8 mb-4">
      <div className=" w-7/12 min-h-[300px] rounded-lg bg-gray-400"></div>
      <div className="w-4/12">
        <div className="w-[70%] h-[2rem] bg-gray-400 rounded-lg mb-4"></div>
        <div className="w-full h-[1.5rem] bg-gray-400 rounded-lg "></div>
      </div>
    </div>
  );
};

const searchItemsList = [];

for (let i = 0; i < 15; i++) searchItemsList.push(<SearchItemShimmer />);

const SearchShimmer = () => {
  return (
    <div className="w-full flex items-center justify-center my-10 animate-pulse">
      <div className="w-7/12">{searchItemsList}</div>
    </div>
  );
};

export default SearchShimmer;
