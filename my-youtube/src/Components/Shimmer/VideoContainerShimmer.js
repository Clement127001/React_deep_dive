const VideoContainerShimmer = () => {
  const VideoShimmer = () => {
    return (
      <div className="min-w-[340px] min-h-[300px] ">
        <div className="w-full h-[200px] bg-gray-500  rounded-lg"></div>
        <div className="flex gap-4 mt-4">
          <div className="w-[3rem] h-[2.5rem] rounded-full bg-gray-500"></div>

          <div className="w-full h-full">
            <div className="w-full h-[1.6rem] rounded-md bg-gray-500 mb-2"></div>
            <div className="w-[70%] h-[1.6rem] rounded-md bg-gray-500"></div>
          </div>
        </div>
      </div>
    );
  };

  let videoShimmers = [];
  for (let i = 0; i < 15; i++) {
    videoShimmers.push(<VideoShimmer key={"video-shimmer" + i} />);
  }

  return (
    <div className="animate-pulse flex flex-wrap gap-x-6 gap-y-8">
      {videoShimmers}
    </div>
  );
};

export default VideoContainerShimmer;
