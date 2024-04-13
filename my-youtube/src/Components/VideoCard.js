import React from "react";
import { NavLink } from "react-router-dom";

const VideoCard = ({ data }) => {
  // console.log(data);
  const { snippet, statistics, contentDetails, id } = data;

  const { title, thumbnails, channelTitle, liveBroadcastContent, channelId } =
    snippet;
  const { viewCount, likeCount } = statistics;
  const { definition } = contentDetails;
  const { high } = thumbnails;

  const getStringFromCount = (count, str) => {
    if (count > 1000 && count < 1000000) {
      str += (count / 1000).toFixed(1) + "K";
    } else {
      str += (count / 1000000).toFixed(1) + "M";
    }

    return str;
  };

  let viewString = getStringFromCount(viewCount, "");
  let likeString = getStringFromCount(likeCount, "");

  return (
    <NavLink to={"/watch?v=" + id + "&channelId=" + channelId}>
      <div className="max-w-[340px] max-h-[300px] ">
        <div className="w-full h-[62%] mb-2">
          {" "}
          <img
            src={high.url}
            alt="title"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className=" line-clamp-2 overflow-hidden text-ellipsis font-sans font-medium text-[1.1rem]">
          {title}
        </h3>
        <h4 className="font-sans  text-[1rem] text-gray-800 mt-2 ">
          {channelTitle}
        </h4>
        <div className="flex gap-4">
          <p className="font-sans text-sm text-gray-700 mt-2 mb-1 font-semibold">
            {viewString} views
          </p>
          <p className="font-sans text-sm text-gray-700 mt-2 mb-1 font-semibold">
            {likeString} likes
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default VideoCard;
