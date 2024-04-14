import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { videoDetail, channelDetail } from "../utils/constants";
import SuggestionList from "./SuggestionList";
import WatchShimmer from "./Shimmer/WatchShimmer";
import VideoStats from "./VideoStats";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("channelId");

  const [videoDetails, setVideoDetails] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);

  const fetchURLs = [
    { url: process.env.REACT_APP_SINGLE_VIDEO_LINK, id: videoId },
    { url: process.env.REACT_APP_CHANNEL_DETAIL_LINK, id: channelId },
  ];

  // const fetchData = async (url, id) => {
  //   const response = await fetch(url + id);
  //   const data = await response.json();
  //   return data.items;
  // };

  // const fetchMutipleData = async () => {
  //   let promises = fetchURLs.map((item) => fetchData(item.url, item.id));

  //   const data = await Promise.all(promises);

  //   console.log(data);
  // };

  const fetchMutipleDummyData = async () => {
    setTimeout(() => {
      setVideoDetails(videoDetail);
      setChannelDetails(channelDetail);
    }, 1000);
  };

  useEffect(() => {
    // fetchMutipleData();
    fetchMutipleDummyData();
  }, []);

  return videoDetails.length == 0 ? (
    <WatchShimmer />
  ) : (
    <div className="flex gap-8 m-8">
      <div>
        <iframe
          width="1100"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}?si=zMYXr6h_HGGNTxQk`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
        {/* channel details */}
        <VideoStats video={videoDetails} channel={channelDetails} />
      </div>

      <SuggestionList />
    </div>
  );
};

export default Watch;
