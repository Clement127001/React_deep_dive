import React, { useEffect, useState } from "react";
import VideoContainerShimmer from "./Shimmer/VideoContainerShimmer";
import { dummyData } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videosList, setVideoList] = useState([]);
  // const fetchVideos = async () => {
  //   const response = await fetch(
  //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  //       "AIzaSyAW3DVDclfV94Osso2vMcJIium-hN1LU6k"
  //   );

  //   const data = await response.json();
  //   setVideoList(data.items);
  // };

  const fetchDummy = () => {
    setTimeout(() => {
      setVideoList(dummyData);
    }, 500);
  };

  useEffect(() => {
    // fetchVideos();
    fetchDummy();
  }, []);

  return (
    <div className="m-5 h-full w-full">
      {videosList.length > 0 ? (
        <div className="flex flex-wrap gap-x-6 gap-y-10">
          {videosList.map((item) => (
            <VideoCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <VideoContainerShimmer />
      )}
    </div>
  );
};

export default VideoContainer;
