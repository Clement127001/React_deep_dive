import React from "react";
import { NavLink } from "react-router-dom";

const Suggestion = ({ data }) => {
  // console.log(data);
  const { snippet, statistics, id } = data;

  const { title, thumbnails, channelTitle, channelId } = snippet;
  const { viewCount, likeCount } = statistics;
  const { medium } = thumbnails;

  const getStringFromCount = (count, str) => {
    if (count > 1000 && count < 1000000) {
      str += (count / 1000).toFixed(1) + "K";
    } else {
      str += (count / 1000000).toFixed(1) + "M";
    }

    return str;
  };

  let viewString = getStringFromCount(viewCount, "");
  return (
    <NavLink to={"/watch?v=" + id + "&channelId=" + channelId}>
      <div className="flex gap-4 max-w-[400px]">
        <img src={medium.url} alt={title} className="w-7/12  rounded-lg" />

        <div>
          <h3 className="line-clamp-2 font-sans font-semibold mb-2">{title}</h3>
          <h4 className="font-sans text-gray-500 text-md mb-1">
            {channelTitle}
          </h4>
          <p className="font-semibold font-sans text-sm">{viewString} views</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Suggestion;
