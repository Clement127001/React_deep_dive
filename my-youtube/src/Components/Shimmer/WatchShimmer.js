const VideoShimmer = () => {
  return (
    <div className=" w-[1100px] h-[800px]">
      <div className="w-full h-[600px] bg-gray-400 rounded-lg mb-4"></div>

      <div className="w-[50%] h-8 rounded-lg mb-4 bg-gray-400  "></div>
      <div className="flex gap-4 items-center">
        <div className=" size-12 rounded-full bg-gray-400"></div>
        <div className="w-[40%] h-8 bg-gray-400 rounded-lg"></div>
      </div>
    </div>
  );
};

const SuggestionShimmer = () => {
  return (
    <div className="w-[400px] flex gap-4">
      <div className=" w-7/12 h-[140px] bg-gray-400 rounded-lg"></div>
      <div className="w-5/12">
        <div className="w-[40%] h-6 rounded-lg bg-gray-400 mb-4"></div>
        <div className="w-[80%] h-6 rounded-lg bg-gray-400"></div>
      </div>
    </div>
  );
};

let SuggestionsShimmer = [];
for (let i = 0; i < 15; i++) {
  SuggestionsShimmer.push(<SuggestionShimmer key={"videoshimmer" + i} />);
}

const WatchShimmer = () => {
  return (
    <div className="flex  gap-8 m-8 animate-pulse">
      <VideoShimmer />
      <div className="flex flex-col flex-wrap gap-4">{SuggestionsShimmer}</div>
    </div>
  );
};

export default WatchShimmer;
