import React, { useEffect, useState } from "react";
import VideoContainerShimmer from "./Shimmer/VideoContainerShimmer";
import { useDispatch, useSelector } from "react-redux";
import { setVideosList } from "../utils/Store/videoSlice";
import { dummyData } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // const fetchVideos = async () => {
  //   const response = await fetch(
  //use the global variable
  //   );

  //   const data = await response.json();
  //   setVideoList(data.items);
  // };

  const { videosList } = useSelector((store) => store.video);
  const dispatch = useDispatch();

  const fetchDummy = () => {
    setTimeout(() => {
      dispatch(setVideosList(dummyData));
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
